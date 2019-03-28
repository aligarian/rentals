import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input()location:string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private mapservice:MapService) { }

  ngOnInit() {
  }
  mapReadyHandler(){
    this.mapservice.geocodeLocation(this.location).subscribe(
      (cordinates)=>{
        this.lat =  cordinates.lat;
        this.lng=cordinates.lng; 
      }
    )
  }
}
