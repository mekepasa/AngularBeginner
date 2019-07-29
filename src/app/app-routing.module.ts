import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AikidokaDetailComponent } from './aikidoka-detail/aikidoka-detail.component';
import { EmployeeComponent } from './employee/employee.component';

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      // {path:'Page1', component:Page1Component},
      // {path:'Page2', component:Page2Component},
      {path:'aikidoka-list', component: EmployeeComponent },
      {path:'aikidoka-detail', component: AikidokaDetailComponent }
      
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
