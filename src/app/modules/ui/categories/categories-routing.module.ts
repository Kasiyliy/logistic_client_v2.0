import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCategoryComponent} from './list-category/list-category.component';
import {AddCategoryComponent} from './add-category/add-category.component';

const routes: Routes = [
  {path: '', component: ListCategoryComponent},
  {path: 'add', component: AddCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
