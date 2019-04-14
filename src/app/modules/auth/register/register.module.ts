import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthRoutingModule} from '../auth-routing.module';
import {NgxSmartModalModule} from 'ngx-smart-modal';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    NgxSmartModalModule
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ]
})
export class RegisterModule { }
