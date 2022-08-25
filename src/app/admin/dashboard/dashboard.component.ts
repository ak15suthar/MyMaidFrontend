import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { CategoryService } from 'src/app/service/category.service';
import { ClientService } from 'src/app/service/client.service';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  maidCounter: number = 0
  clientCounter: number = 0
  bookingCounter: number = 0
  categoryCounter: number = 0

  constructor(private maidService: MaidService, private clientService: ClientService,
    private bookingService: BookingService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.maidService.getMaid().then(res =>{
      this.maidCounter = res.length    
    })

    this.clientService.getClient().then(res =>{
      this.clientCounter = res.length    
    })

    this.bookingService.getBooking().then(res =>{
      this.bookingCounter = res.length    
    })

    this.categoryService.getCategory().then(res =>{
      this.categoryCounter = res.length
    })
  }

}
