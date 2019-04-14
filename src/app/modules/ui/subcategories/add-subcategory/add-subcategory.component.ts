import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../../../../router.animations';
import {Category} from '../../../../shared/models/category';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {Subcategory} from '../../../../shared/models/subcategory';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css'],
  animations: [slideToLeft()]
})
export class AddSubcategoryComponent implements OnInit {

  categories: Category[] = [];
  selectedValue = null;
  subcategoryForm: FormGroup;

  constructor(private http: HttpClient,
              private builder: FormBuilder,
              private subcategoryService: SubcategoryService,
              private toastr: ToastrService,
              private router: Router,
              private categoryService: CategoryService) {
    this.subcategoryForm = this.builder.group({
      productCategoryId: [null, Validators.required],
      subCategoryAddInfo: [null, Validators.required],
      subCategoryNameEn: [null, Validators.required],
      subCategoryNameKk: [null, Validators.required],
      subCategoryNameRu: [null, Validators.required],
    });
  }

  addSubCategory() {
    const subcategory = new Subcategory();
    subcategory.productCategoryId = parseInt(this.subcategoryForm.get('productCategoryId').value, 10);
    subcategory.subCategoryAddInfo = this.subcategoryForm.get('subCategoryAddInfo').value;
    subcategory.subCategoryNameEn = this.subcategoryForm.get('subCategoryNameEn').value;
    subcategory.subCategoryNameKk = this.subcategoryForm.get('subCategoryNameKk').value;
    subcategory.subCategoryNameRu = this.subcategoryForm.get('subCategoryNameRu').value;
    console.log(subcategory);
    this.subcategoryForm.reset();
    this.subcategoryService.add(subcategory).subscribe(res => {
      this.toastr.success('Подкатегория добавлена!');
      this.router.navigate(['ui/subcategories']);
    }, err => {
      this.toastr.error('Ошибка!');
    });

  }

  ngOnInit() {
    this.categoryService.listCategories().subscribe(perf => {
      this.categories = perf;
    });
  }

}
