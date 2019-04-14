import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriesRoutingModule} from './categories-routing.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AddCategoryComponent} from './add-category/add-category.component';
import {ListCategoryComponent} from './list-category/list-category.component';

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ]
})
export class CategoriesModule {
}
