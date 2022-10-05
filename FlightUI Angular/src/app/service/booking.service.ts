import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookData } from '../model/bookData.model';
import { Booking } from '../model/bookingConfirm.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  insertPassenger(booking: Booking): Observable<Booking>{
    return this.http.post<Booking>('http://localhost:2008/insert/passenger', booking);
  }
  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>('http://localhost:2008/get/all/passengers');
  }
}
