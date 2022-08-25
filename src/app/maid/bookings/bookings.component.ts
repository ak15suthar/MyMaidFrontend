import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  list: any[]
  // data: any[]
  status_id = 0
  id = 0
  
  constructor(private bookService: BookingService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isMaidId')
   
    if (m) {
      this.bookService.getBookingByMaidId(m).then(res => {
        this.list = res
        
      })
    }
    
  }

  accept(value: any) {
    let data = { "booking_id": value, "status_id": this.status_id = 2 }
      this.bookService.updateBookingStatus(data).subscribe(res => {
      
    })
  }

  reject(value: any) {
    let data = { "booking_id": value, "status_id": this.status_id = 3 }
    this.bookService.updateBookingStatus(data).subscribe(res => {
    
    })
    
  }

}
