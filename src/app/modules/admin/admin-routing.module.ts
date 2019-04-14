import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // children: [
    //   { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    //   // { path: 'dishes', loadChildren: './dishes/dishes.module#DishesModule' },
    //   // { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsModule' },
    //   // { path: 'programs', loadChildren: './programs/programs.module#ProgramsModule' },
    //   // { path: 'catalogs', loadChildren: './catalogs/catalogs.module#CatalogsModule' },
    //   // { path: 'bmi-calculator', loadChildren: './bmi-calculator/bmi-calculator.module#BmiCalculatorModule' },
    //   // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
