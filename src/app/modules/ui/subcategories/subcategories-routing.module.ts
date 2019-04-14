import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCategoryComponent} from '../categories/list-category/list-category.component';
import {AddCategoryComponent} from '../categories/add-category/add-category.component';
import {EditCategoryComponent} from '../categories/edit-category/edit-category.component';
import {ListSubcategoryComponent} from './list-subcategory/list-subcategory.component';
import {AddSubcategoryComponent} from './add-subcategory/add-subcategory.component';
import {EditSubcategoryComponent} from './edit-subcategory/edit-subcategory.component';

const routes: Routes = [
  {path: '', component: ListSubcategoryComponent},
  {path: 'add', component: AddSubcategoryComponent},
  {path: 'edit' , component : EditSubcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
