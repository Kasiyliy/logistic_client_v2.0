import { ProductService } from './../../../../shared/services/product.service';
import { Product } from './../../../../shared/models/product';
import { SubcategoryService } from './../../../../shared/services/subcategory.service';
import { Subcategory } from './../../../../shared/models/subcategory';
import { Category } from './../../../../shared/models/category';
import { Company } from './../../../../shared/models/company';
import { CompanyService } from './../../../../shared/services/company.service';
import { CategoryService } from './../../../../shared/services/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {slideToLeft} from '../../../../router.animations';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editFormProduct: FormGroup;
  categories: Category[];
  subcategories: Subcategory[];
  companies: Company[];
  subcategory: Subcategory;

  constructor(private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService,
              private subcategoryService: SubcategoryService, private categoryService: CategoryService,
              private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit(): void  {
    const productId = parseInt(localStorage.getItem('editProductId'), 10 );
    if (!productId) {
      alert('Invalid action.');
      this.router.navigate(['list-product']);
      return;
    }
    this.editFormProduct = this.formBuilder.group({
      productId: [null],
        productCategoryId: [null, Validators.required],
        productDescription: [null, Validators.required],
        productNameEn: [null, Validators.required],
        productNameKk: [null, Validators.required],
        productNameRu: [null, Validators.required],
        sellerCompanyId: [null, Validators.required],
        price: [ null, Validators.required],
        size: [null, Validators.required],
        manufacturer: [null, Validators.required],
        weight: [null, Validators.required],
        specialCharacteristicId: [null, Validators.required],
        productSubcategoryId: [null, Validators.required],
        serialNumber: [null, Validators.required],
        uniqueIdNumber: [null , Validators.required],
    });

    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.subcategoryService.listSubCategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });

    this.companyService.listCompanies().subscribe(companies => {
      this.companies = companies;
    });



    this.productService.getProductById(productId)
      .subscribe( data => {
        const product = new Product();
        product.productId = data.productId;
        product.productCategoryId = data.productCategoryId;
        product.productDescription = data.productDescription;
        product.productNameEn = data.productNameEn;
        product.productNameKk = data.productNameKk;
        product.productNameRu = data.productNameRu;
        product.productSubcategoryId = data.productSubcategoryId;
        product.sellerCompanyId = data.sellerCompanyId;
        product.size = data.size;
        product.specialCharacteristicId = data.specialCharacteristicId;
        product.weight = data.weight;
        product.uniqueIdNumber = data.uniqueIdNumber;
        product.manufacturer = data.manufacturer;
        product.price = data.price;
        this.editFormProduct.setValue(product);
      });

  }

  onSubmit() {
    this.productService.updateProduct(this.editFormProduct.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['ui/products']);
      },
      error => {
        alert(error);
      });
  }

}
