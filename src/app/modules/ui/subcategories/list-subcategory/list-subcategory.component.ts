import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../../../../router.animations';
import {Category} from '../../../../shared/models/category';
import {Subcategory} from '../../../../shared/models/subcategory';
import {Router} from '@angular/router';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css'],
  animations: [slideToLeft()]
})
export class ListSubcategoryComponent implements OnInit {

  subcategories: Subcategory[];
  categories: Category[];
  deletingSubcategory: Subcategory;

  constructor(private router: Router,
              private subcategoryService: SubcategoryService,
              private ngxSmartModalService: NgxSmartModalService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.subcategoryService.listSubCategories()
      .subscribe(data => {
        this.subcategories = data;
      });

    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });


  }

  addSubCategory(): void {
    this.router.navigate(['ui/subcategories/add']);
  }

  deleteSubCategory(subcategory: Subcategory): void {
    this.subcategoryService.deleteSubcategory(subcategory.productSubcategoryId)
      .subscribe(data => {
        this.subcategories = this.subcategories.filter(s => s !== subcategory);
        this.ngxSmartModalService.getModal('myModal').close();
      });
  }

  editSubCategory(subcategory: Subcategory): void {
    localStorage.removeItem('editSubCategoryId');
    localStorage.setItem('editSubCategoryId', subcategory.productSubcategoryId.toString());
    this.router.navigate(['ui/subcategories/edit']);
  }


  submitToDeleteCategory(subcategory: Subcategory): void {
    this.deletingSubcategory = subcategory;
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
