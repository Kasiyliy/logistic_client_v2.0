import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../../../../router.animations';
import {Category} from '../../../../shared/models/category';
import {Subcategory} from '../../../../shared/models/subcategory';
import {Company} from '../../../../shared/models/company';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../../shared/services/product.service';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {CompanyService} from '../../../../shared/services/company.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../shared/services/category.service';
import {Product} from '../../../../shared/models/product';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  animations: [slideToLeft()]
})
export class AddProductComponent implements OnInit {

  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  companies: Company[] = [];
  productForm: FormGroup;

  constructor(private http: HttpClient,
              private builder: FormBuilder,
              private productService: ProductService,
              private subcategoryService: SubcategoryService,
              private companyService: CompanyService,
              private toastr: ToastrService,
              private router: Router,
              private categoryService: CategoryService) {
    this.productForm = this.builder.group({
      productCategoryId: [null, Validators.required],
      productDescription: [null, Validators.required],
      productNameEn: [null, Validators.required],
      productNameKk: [null, Validators.required],
      productNameRu: [null, Validators.required],
      sellerCompanyId: [null, Validators.required],
      price: [null, Validators.required],
      size: [null, Validators.required],
      manufacturer: [null, Validators.required],
      weight: [null, Validators.required],
      specialCharacteristicId: [null, Validators.required],
      productSubcategoryId: [null, Validators.required],
      serialNumber: [null, Validators.required],
      uniqueIdNumber: [null, Validators.required],
    });
  }


  addProduct() {
    const product = new Product();
    product.productCategoryId = parseInt(this.productForm.get('productCategoryId').value, 10);
    product.productDescription = this.productForm.get('productDescription').value;
    product.productSubcategoryId = parseInt(this.productForm.get('productSubcategoryId').value, 10);
    product.productNameEn = this.productForm.get('productNameEn').value;
    product.productNameKk = this.productForm.get('productNameKk').value;
    product.productNameRu = this.productForm.get('productNameRu').value;
    product.sellerCompanyId = parseInt(this.productForm.get('sellerCompanyId').value, 10);
    product.specialCharacteristicId = this.productForm.get('specialCharacteristicId').value;
    product.size = this.productForm.get('size').value;
    product.weight = this.productForm.get('weight').value;
    product.price = this.productForm.get('price').value;
    product.serialNumber = this.productForm.get('serialNumber').value;
    product.uniqueIdNumber = this.productForm.get('uniqueIdNumber').value;
    product.manufacturer = this.productForm.get('manufacturer').value;

    this.productForm.reset();
    this.productService.add(product).subscribe(res => {
      this.toastr.success(res);
      this.router.navigate(['profile']);
    }, err => {
      this.toastr.error(err);
    });
  }


  ngOnInit() {
    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.subcategoryService.listSubCategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
    this.companyService.listCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }


}
