import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminDeleteEmployeeComponent } from './admin-delete-employee/admin-delete-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewRequestsComponent } from './admin-view-requests/admin-view-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { SendRequestComponent } from './send-request/send-request.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddEmployeeComponent,
    AdminDeleteEmployeeComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminMenuComponent,
    AdminAddProductComponent,
    AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    AdminViewRequestsComponent,
    SendRequestComponent,
    EditProfileComponent,
    UnlockUsersComponent,
    UpdateOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
