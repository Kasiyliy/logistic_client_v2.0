import { Component, OnInit } from '@angular/core';
import {slideToLeft} from '../../../../router.animations';
import {Category} from '../../../../shared/models/category';
import {Product} from '../../../../shared/models/product';
import {Subcategory} from '../../../../shared/models/subcategory';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../shared/services/category.service';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {ProductService} from '../../../../shared/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  animations: [slideToLeft()]
})
export class ListProductComponent implements OnInit {

  products: Product[];
  subcategories: Subcategory[];
  categories: Category[];
  constructor(private router: Router,
              private productService: ProductService ,
              private subcategoryService: SubcategoryService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.productService.listProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  addProduct(): void {
    this.router.navigate(['ui/products/add']);

  }


  deleteProduct(product: Product): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      this.productService.deleteProduct(product.productId)
        .subscribe( data => {
          this.products = this.products.filter(p => p !== product);
        });
    }
  }

  editProduct(product: Product): void {
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.productId.toString());
    this.router.navigate(['edit-product']);

  }


}
