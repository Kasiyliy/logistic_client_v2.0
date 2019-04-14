import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriesRoutingModule} from './categories-routing.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AddCategoryComponent} from './add-category/add-category.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgxSmartModalModule,
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
