import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';

import { RentalModule } from './rental/rental-module';
import { RentalComponent } from './rental/rental.component';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
const routes:Routes = [
  {path:'',redirectTo:'/rentals',pathMatch:'full'},
  {path:'temp',component:TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
    RentalDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
