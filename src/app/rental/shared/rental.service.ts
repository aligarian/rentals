import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { Rental } from "./rental.model";


@Injectable()
export class RentalService{
    constructor(private http:HttpClient){}
    /**
     * getRentalDetailById
     */
    public getRentalDetailById(rentalId:string ): Observable<any> {
      return this.http.get('/api/v1/rentals/'+rentalId);
    }
    /**
     * getRentals:any[]
     */
    public getRentals():Observable<any> {
      return this.http.get('/api/v1/rentals');
    }
}