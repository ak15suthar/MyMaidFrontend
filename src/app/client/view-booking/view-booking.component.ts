import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  list: any[]
  constructor(private service: BookingService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isClientId')
    

    this.service.getBookingByClientid(m).then(res => {
      this.list = res
      
    })
  }

}
