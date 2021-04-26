import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path:`\mainmenu`,component:MainMenuComponent},
  {path:'\admin',component:AdminHomeComponent},
  {path:`\adminlogin`,component:AdminLoginComponent},
  {path:`\adminmenu`,component:AdminMenuComponent,canActivate:[AdminAuthGaurdService]},
  {path:``,redirectTo:"\mainmenu",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
