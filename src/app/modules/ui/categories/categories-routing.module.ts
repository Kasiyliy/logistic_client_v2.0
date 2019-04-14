import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCategoryComponent} from './list-category/list-category.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {path: '', component: ListCategoryComponent},
  {path: 'add', component: AddCategoryComponent},
  {path: 'edit-category' , component : EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
