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
import { UserHomeComponent } from './user-home/user-home.component';
import { CartComponent } from './cart/cart.component';
import { AdminGenerateReportsComponent } from './admin-generate-reports/admin-generate-reports.component';
import { AdminDailyReportComponent } from './admin-daily-report/admin-daily-report.component';
import { AdminWeeklyReportComponent } from './admin-weekly-report/admin-weekly-report.component';
import { AdminMonthlyReportComponent } from './admin-monthly-report/admin-monthly-report.component';
import { AdminProductReportComponent } from './admin-product-report/admin-product-report.component';
import { AdminCustomerReportComponent } from './admin-customer-report/admin-customer-report.component';

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
    UserHomeComponent,
    CartComponent,
    AdminGenerateReportsComponent,
    AdminDailyReportComponent,
    AdminWeeklyReportComponent,
    AdminMonthlyReportComponent,
    AdminProductReportComponent,
    AdminCustomerReportComponent
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
