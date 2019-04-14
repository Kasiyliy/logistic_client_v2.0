import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoleGuard} from './shared/guards/role.guard';
import {AuthGuard} from './shared/guards/auth.guard';
import {UnauthGuard} from './shared/guards/unauth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'front/shop' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [RoleGuard] },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', canActivate: [UnauthGuard] },
  { path: 'front', loadChildren: './modules/front/front.module#FrontModule'},
  { path: 'ui', loadChildren: './modules/ui/ui.module#UiModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
