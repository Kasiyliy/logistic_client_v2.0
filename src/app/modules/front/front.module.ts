import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontRoutingModule} from './front-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import {ShopComponent} from './components/shop/shop.component';

@NgModule({
  declarations: [
    ContactComponent,
    MainComponent,
    ShopComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
