import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxSmartModalModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule {
}
