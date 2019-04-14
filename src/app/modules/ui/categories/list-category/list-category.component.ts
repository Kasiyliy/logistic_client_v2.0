import {Component, OnInit} from '@angular/core';
import {Category} from '../../../../shared/models/category';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../shared/services/category.service';
import {slideToLeft} from '../../../../router.animations';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
  animations: [slideToLeft()]
})
export class ListCategoryComponent implements OnInit {

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.listCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

  deleteCategory(category: Category): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      this.categoryService.deleteCategory(category.productCategoryId).toPromise().then(resp => {
        this.categories = this.categories.filter(c => c.productCategoryId !== category.productCategoryId);
        console.log(this.categories);
      });
    }
  }

  editCategory(category: Category): void {
    localStorage.removeItem('editCategoryId');
    localStorage.setItem('editCategoryId', category.productCategoryId.toString());
    this.router.navigate(['edit-category']);

  }

}
