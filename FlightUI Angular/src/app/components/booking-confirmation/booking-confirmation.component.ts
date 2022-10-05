import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from 'src/app/model/bookingConfirm.model';
import { Flight } from 'src/app/model/flight.model';
import { FlightData } from 'src/app/model/flightData';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  id:string;
  flightDataA: FlightData;
  name:string;
  sum:number = 0;
  passenger: Booking;
  constructor(private flightService: AllFlightsDetailsService, 
    private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');

    this.flightService.getFlightDetailsById(this.id).subscribe(data=>{
    this.flightDataA = data;
    });
    console.log(this.flightDataA.id);
  }
  change(fareForm: NgForm){
    this.sum = (fareForm.value.no_of_adult*this.flightDataA.priceAdult) + 
                (fareForm.value.no_of_children*this.flightDataA.priceChild);
  }
  onFormSubmit(fareForm: NgForm){
    console.log('Submit is working');
    let booking: Booking={
      name:fareForm.value.name,
      contact: fareForm.value.contact,
      email: fareForm.value.email,
      flightName: this.flightDataA.name,
      source: this.flightDataA.source,
      destination: this.flightDataA.destination,
      depDate: this.flightDataA.depDate,
      depTime: this.flightDataA.depTime,
      arvDate: this.flightDataA.arvDate,
      arvTime: this.flightDataA.arvTime,
      adult: fareForm.value.no_of_adult,
      child: fareForm.value.no_of_children,
      price: this.sum
    }
    this.bookingService.insertPassenger(booking).subscribe(data=>{
      this.passenger = data;
    });
    confirm('Are you sure?');
  }
}
