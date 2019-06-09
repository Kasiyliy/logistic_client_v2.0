import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ListOrdersComponent} from './list-orders/list-orders.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';

@NgModule({
  declarations: [
    ListOrdersComponent,
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgxSmartModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ]
})
export class OrdersModule {
}
