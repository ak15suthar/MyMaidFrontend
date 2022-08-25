import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  list: any[]
  constructor(private service: BookingService) { }

  ngOnInit(): void {
    this.service.getBooking().then(res => {
      this.list = res
    })
  }

}
