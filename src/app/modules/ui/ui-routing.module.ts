import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UiComponent} from './ui.component';

const routes: Routes = [
  {
    path: '', component: UiComponent,
    children: [
      {path: 'categories', loadChildren: './categories/categories.module#CategoriesModule'},
      {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UiRoutingModule {
}
