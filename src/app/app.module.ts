import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';

import { RentalModule } from './rental/rental-module';

const routes:Routes = [
  {path:'',redirectTo:'/rentals',pathMatch:'full'},
  {path:'temp',component:TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
    
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
