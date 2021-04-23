import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';

const routes: Routes = [
  {path:'\adminaddemployee', component:AdminAddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
