import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/bookingConfirm.model';
import { Flight } from '../model/flight.model';
import { FlightData } from '../model/flightData';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class AllFlightsDetailsService {
  

  constructor(private http: HttpClient) { }

  getAllFlights() :Observable<Vendor[]>{
    return this.http.get<Vendor[]>('http://localhost:2008/flight/all'); 
  }

  bookFlight(ss: string, sd: string, sc: string) :Observable<Flight[]>{
    return this.http.get<Flight[]>('http://localhost:2008/flight/' + ss + '/' + sd + '/' + sc);
  }
  showBooking(eid: number) :Observable<FlightData> {
    return this.http.get<FlightData>('http://localhost:2008/flight/one/'+eid)
  }
  getFlightDetailsById(id: string) {
    return this.http.get<FlightData>('http://localhost:2008/flight/one/'+id)
  }
}
