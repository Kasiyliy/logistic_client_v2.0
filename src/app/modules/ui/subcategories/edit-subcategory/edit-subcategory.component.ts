import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../../../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../shared/models/category';
import {Subcategory} from '../../../../shared/models/subcategory';
import {Router} from '@angular/router';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {ToastrService} from 'ngx-toastr';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css'],
  animations: [slideToLeft()]
})
export class EditSubcategoryComponent implements OnInit {

  editFormSubCategory: FormGroup;
  categories: Category[];
  subcategory: Subcategory;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private subcategoryService: SubcategoryService,
              private categoryService: CategoryService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {

    const subcategoryId = parseInt(localStorage.getItem('editSubCategoryId'), 10);
    if (!subcategoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-subcategory']);
      return;
    }
    this.editFormSubCategory = this.formBuilder.group({
      productSubcategoryId: [null],
      productCategoryId: [null, Validators.required],
      subCategoryAddInfo: ['', Validators.required],
      subCategoryNameEn: ['', Validators.required],
      subCategoryNameRu: ['', Validators.required],
      subCategoryNameKk: ['', Validators.required],
    });

    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });


    this.subcategoryService.getSubcategoryById(subcategoryId)
      .subscribe(data => {
        const subcategory = new Subcategory();
        subcategory.productSubcategoryId = data.productSubcategoryId;
        subcategory.productCategoryId = data.productCategoryId;
        subcategory.subCategoryAddInfo = data.subCategoryAddInfo;
        subcategory.subCategoryNameEn = data.subcategoryName.en;
        subcategory.subCategoryNameRu = data.subcategoryName.ru;
        subcategory.subCategoryNameKk = data.subcategoryName.kk;
        this.editFormSubCategory.setValue(subcategory);
      });
  }


  onSubmit() {
    this.subcategoryService.updateSubcategory(this.editFormSubCategory.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['ui/subcategories']);
        },
        error => {
          alert(error);
        });
  }
}
