import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminDeleteEmployeeComponent } from './admin-delete-employee/admin-delete-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

const routes: Routes = [
  {path:'\admin',component:AdminHomeComponent},
  {path:`\adminlogin`,component:AdminLoginComponent},
  {path:`\adminmenu`,component:AdminMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
