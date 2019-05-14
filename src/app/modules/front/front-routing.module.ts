import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {MainComponent} from './components/main/main.component';
import {ShopComponent} from './components/shop/shop.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';

const routes: Routes = [
  {path : '', redirectTo: 'main'},
  {path : 'main', component: MainComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'products/:id', component:ProductDetailsComponent},
  {path : 'shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
