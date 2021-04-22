import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminMenuComponent,
    AdminAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
