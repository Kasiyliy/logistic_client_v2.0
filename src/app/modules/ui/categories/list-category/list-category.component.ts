import {Component, OnInit} from '@angular/core';
import {Category} from '../../../../shared/models/category';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../shared/services/category.service';
import {slideToLeft} from '../../../../router.animations';
import {Observable, of} from 'rxjs';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
  animations: [slideToLeft()]
})
export class ListCategoryComponent implements OnInit {

  // observableCategories: Observable<Category[]>;
  categories: Category[];
  deletingCategory: Category;

  constructor(private router: Router,
              private categoryService: CategoryService,
              private ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.categoryService.listCategories()
      .subscribe(data => {
        this.categories = data;
        // this.observableCategories = of(this.categories);
      });
  }

  deleteCategory(category: Category): void {
    this.categoryService.deleteCategory(category.productCategoryId).toPromise().then(resp => {
      this.categories = this.categories.filter(c => c.productCategoryId !== category.productCategoryId);
      this.ngxSmartModalService.getModal('myModal').close()
    });
  }

  submitToDeleteCategory(category: Category): void {
    this.deletingCategory = category;
    this.ngxSmartModalService.getModal('myModal').open();
  }

  editCategory(category: Category): void {
    localStorage.removeItem('editCategoryId');
    localStorage.setItem('editCategoryId', category.productCategoryId.toString());
    this.router.navigate(['ui/categories/edit-category']);

  }

}
