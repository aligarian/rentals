import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental:any={};
  constructor(private route: ActivatedRoute, private rentalservice: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRentalDetail(params['rentalId']);
    });
  }
  getRentalDetail(id:string){
    this.rentalservice.getRentalDetailById(id).subscribe(
      (detail) => {
        this.rental = detail;
      },
      (err)=>{ console.log(err); }
    )
  }

}
