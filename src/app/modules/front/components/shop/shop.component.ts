import { Category } from './../../../../shared/models/category';
import { CategoryService } from './../../../../shared/services/category.service';
import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import { Router } from '@angular/router';
import { ProductService } from './../../../../shared/services/product.service';
import { Product } from './../../../../shared/models/product';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [routerTransition()]
})
export class ShopComponent implements OnInit {
  products: Product[];
  categories: Category[];
  deletingProduct: Product;
  constructor(private productService: ProductService,
              private ngxSmartModalService: NgxSmartModalService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.productService.listProducts()
      .subscribe(data => {
        this.products = data;
      });

    this.categoryService.listCategories().subscribe(data =>{
        this.categories = data;
    });
  }
  editProduct(product: Product): void {
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.productId.toString());
    this.router.navigate(['ui/products/edit']);

  }


  submitToDeleteProduct(product: Product): void {
    this.deletingProduct = product;
    this.ngxSmartModalService.getModal('myModal').open();
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.productId)
      .subscribe(data => {
        this.products = this.products.filter(p => p !== product);
        this.ngxSmartModalService.getModal('myModal').close();
      });
  }

}
