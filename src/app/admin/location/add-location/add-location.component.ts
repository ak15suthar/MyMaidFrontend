import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  myForm: FormGroup
  id = 0
  updateLocation: any
  constructor(private service: LocationService, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.pincode
    

    if (this.id) {
      this.service.getLocationById(this.id).then(res => {
        this.updateLocation = res
        this.myForm = new FormGroup({
          pincode: new FormControl(this.updateLocation[0].pincode, Validators.required),
          location_name: new FormControl(this.updateLocation[0].location_name, Validators.required),
          city: new FormControl(this.updateLocation[0].city, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      pincode: new FormControl('', Validators.required),
      location_name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  }

  submit() {
   

    if (this.id) {
      this.service.updateLocation(this.myForm.value).subscribe(res => {
      })
      this.rout.navigateByUrl('/admin-location')
    }
    else {
      this.service.addLocation(this.myForm.value).subscribe(res => {
      })
      this.rout.navigateByUrl('/admin-location')
    }
  }
}
