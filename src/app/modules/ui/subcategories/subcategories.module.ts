import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubcategoriesRoutingModule} from './subcategories-routing.module';
import {AddSubcategoryComponent} from './add-subcategory/add-subcategory.component';
import {ListSubcategoryComponent} from './list-subcategory/list-subcategory.component';
import {EditSubcategoryComponent} from './edit-subcategory/edit-subcategory.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddSubcategoryComponent,
    ListSubcategoryComponent,
    EditSubcategoryComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule,
    FormsModule,
    ReactiveFormsModule,
    SubcategoriesRoutingModule
  ]
})
export class SubcategoriesModule {
}
