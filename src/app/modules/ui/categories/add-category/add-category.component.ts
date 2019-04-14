import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../shared/services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../../../shared/models/category';
import {slideToLeft} from '../../../../router.animations';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  animations: [slideToLeft()]
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private categoryService: CategoryService, private router: Router) {
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
    console.log(category);
    this.categoryForm.reset();
    this.categoryService.add(category);
    this.router.navigate(['profile']);
  }

  ngOnInit() {
  }

}
