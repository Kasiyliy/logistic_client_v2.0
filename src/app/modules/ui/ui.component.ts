import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {CategoryService} from '../../shared/services/category.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Category} from '../../shared/models/category';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
  animations: [routerTransition()]
})
export class UiComponent implements OnInit {

  category: Category [] = [];

  categoryForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private categoryService: CategoryService, private authService: AuthService) {
    this.categoryForm = this.builder.group({
      addInfo: [null, Validators.required],
      categoryNameEn: [null, Validators.required],
      categoryNameKk: [null, Validators.required],
      categoryNameRu: [null, Validators.required],
    });
  }

  addCategory() {
    const category = new Category();
    category.addInfo = this.categoryForm.get('addInfo').value;
    category.categoryNameEn = this.categoryForm.get('categoryNameEn').value;
    category.categoryNameKk = this.categoryForm.get('categoryNameKk').value;
    category.categoryNameRu = this.categoryForm.get('categoryNameRu').value;
    this.categoryForm.reset();
    this.categoryService.add(category);
  }

  ngOnInit(): void {
  }

}
