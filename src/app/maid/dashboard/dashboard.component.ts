import { Component, OnInit } from '@angular/core';
import { MaidService } from 'src/app/service/maid.service';
import { BookingService } from 'src/app/service/booking.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookingCounter: number = 0
  maidCounter: number = 0

  constructor(private maidService:MaidCategoryService, private bookingServive:BookingService) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('isMaidId')

    this.maidService.getMaidCategory(id).then(res =>{
      this.maidCounter = res.length    
    })

    this.bookingServive.getBookingByMaidId(id).then(res =>{
      this.bookingCounter = res.length
    })
  }

}
