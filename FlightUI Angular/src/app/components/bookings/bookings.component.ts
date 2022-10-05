import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/bookingConfirm.model';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookingArray: Booking[];
  constructor(private bookingservice: BookingService) { }

  ngOnInit(): void {
    this.bookingservice.getAllBookings().subscribe(data=>{
      this.bookingArray = data;
    });
  }

}
