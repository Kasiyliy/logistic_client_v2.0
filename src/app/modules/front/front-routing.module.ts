import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {MainComponent} from './components/main/main.component';
import {ShopComponent} from './components/shop/shop.component';

const routes: Routes = [
  {path : '', redirectTo: 'main'},
  {path : 'main', component: MainComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
