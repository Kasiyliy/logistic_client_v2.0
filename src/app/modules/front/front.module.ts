import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontRoutingModule} from './front-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import {ShopComponent} from './components/shop/shop.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ContactComponent,
    MainComponent,
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxSmartModalModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    ButtonsModule.forRoot()
  ]
})
export class FrontModule { }
