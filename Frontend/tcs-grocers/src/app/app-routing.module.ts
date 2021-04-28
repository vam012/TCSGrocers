import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserMainMenuComponent} from './user-main-menu/user-main-menu.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserRaiseTicketComponent} from './user-raise-ticket/user-raise-ticket.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAuthGaurdService } from './user-auth-gaurd.service';

const routes: Routes = [
  {path:`\mainmenu`,component:MainMenuComponent},
  {path:'\admin',component:AdminHomeComponent},
  {path:`\adminlogin`,component:AdminLoginComponent},
  {path:`\adminmenu`,component:AdminMenuComponent,canActivate:[AdminAuthGaurdService]},
  {path:``,redirectTo:"\mainmenu",pathMatch:"full"},
  {path: `user`, component:  UserMainMenuComponent},
  {path:'usermenu',component:UserDashboardComponent,canActivate:[UserAuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
