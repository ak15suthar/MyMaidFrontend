import { Component, OnInit } from '@angular/core';
import { Maid } from 'src/app/interface/maid';
import { LocationService } from 'src/app/service/location.service';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: Maid
  location: number
  location_name: string
  constructor(private service: MaidService, private locationService: LocationService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isMaidId')
    if (m) {
      this.service.getMaidById(m).then(res => {
        this.data = res[0]
        this.location = this.data.pincode
        this.locationService.getLocationById(this.location).then(res => {
          this.location_name = res[0].location_name
      
        })
      })
    }
  }
}
