import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RentalService } from './shared/rental.service';
import { RentalComponent } from './rental.component';

import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalDetailComponent } from "./rental-detail/rental-detail.component";


const routes: Routes = [
  {
    path: 'rentals', component: RentalComponent, 
    children: [
      { path: '', component: RentalListingComponent },
      { path:':rentalId', component:RentalDetailComponent }
    ] 
  },
  
  
]

@NgModule({
  declarations: [
    RentalListingComponent,
    RentalListItemComponent,
    RentalComponent
  ],
  providers:[
    RentalService,
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class RentalModule { }
