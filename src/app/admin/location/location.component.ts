import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  list: any[]

  constructor(private service: LocationService) { }

  ngOnInit(): void {
    this.service.getLocation().then(res => {
      this.list = res
    })
  }

  delete(value: any){
    this.service.deleteLocation(value).subscribe(res => {
    })
  }
}
