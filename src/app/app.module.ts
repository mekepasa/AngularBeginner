import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HyphenSlashPipe } from  './hypenToSlash.pipe';
import { RatingComponent } from './rating.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AikidokaDetailComponent } from './aikidoka-detail/aikidoka-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: 'aikidoka-detail', component: AikidokaDetailComponent },
//   // { path: 'hero/:id',      component: HeroDetailComponent },
//   // {
//   //   path: 'Employee',
//   //   component: EmployeeComponent,
//   //   data: { title: 'Heroes List' }
//   // },
//   { path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
//   // { path: '**', component: AppComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HyphenSlashPipe,
    RatingComponent,
    Page1Component,
    Page2Component,
    AikidokaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // RouterModule.forRoot(
    //   appRoutes,
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
