import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../shared/services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../../../shared/models/category';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {slideToLeft} from '../../../../router.animations';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  animations: [slideToLeft()]
})
export class EditCategoryComponent implements OnInit {
  category: Category;
  editFormCategory: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    const categoryId = parseInt(localStorage.getItem('editCategoryId'), 10 );
    if (!categoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-category']);
      return;
  }
    this.editFormCategory = this.formBuilder.group({
      productCategoryId: [],
      addInfo: ['', Validators.required],
      categoryNameEn: ['', Validators.required],
      categoryNameRu: ['', Validators.required],
      categoryNameKk: ['', Validators.required],
    });

    this.categoryService.getCategoryById(categoryId)
    .subscribe( data => {
      const category = new Category();
      category.productCategoryId = data.productCategoryId;
      category.addInfo = data.addInfo;
      category.categoryNameEn = data.categoryName.en;
      category.categoryNameRu = data.categoryName.ru;
      category.categoryNameKk = data.categoryName.kk;
      this.editFormCategory.setValue(category);
    });
  }
    onSubmit() {
      this.categoryService.updateCategory(this.editFormCategory.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['ui/categories']);
          },
          error => {
            alert(error);
          });

  }
}
