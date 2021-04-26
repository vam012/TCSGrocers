import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:'\admin',component:AdminHomeComponent},
  {path:`\adminlogin`,component:AdminLoginComponent},
  {path:`user`,component:UserHomeComponent},
  {path:`cart`,component:CartComponent}
  {path:`\adminmenu`,component:AdminMenuComponent,canActivate:[AdminAuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
