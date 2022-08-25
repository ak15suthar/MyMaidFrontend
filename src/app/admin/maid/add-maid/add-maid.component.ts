import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';
import { MaidService } from 'src/app/service/maid.service';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-add-maid',
  templateUrl: './add-maid.component.html',
  styleUrls: ['./add-maid.component.css']
})
export class AddMaidComponent implements OnInit {
  myForm: FormGroup
  id = 0
  listPincode: any[]
  listStatus: any[]
  updateMaid: any[]
  constructor(private maidService: MaidService, private locationService: LocationService, private statusService: StatusService, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.locationService.getLocation().then(res => {
      this.listPincode = res
    })

    this.statusService.getStatus().then(res => {
      this.listStatus = res
    })
    this.id = this.router.snapshot.params.maid_id



    if (this.id) {
      this.maidService.getMaidById(this.id).then(res => {
        this.updateMaid = res
        this.myForm = new FormGroup({
          maid_id: new FormControl(this.updateMaid[0].maid_id, Validators.required),
          fname: new FormControl(this.updateMaid[0].fname, Validators.required),
          lname: new FormControl(this.updateMaid[0].lname, Validators.required),
          email: new FormControl(this.updateMaid[0].email, Validators.required),
          password: new FormControl(this.updateMaid[0].password, Validators.required),
          gender: new FormControl(this.updateMaid[0].gender, Validators.required),
          dob: new FormControl(this.updateMaid[0].dob, Validators.required),
          experience: new FormControl(this.updateMaid[0].experience, Validators.required),
          pincode: new FormControl(this.updateMaid[0].pincode, Validators.required),
          profile: new FormControl(this.updateMaid[0].profile, Validators.required),
          aadhar_card: new FormControl(this.updateMaid[0].aadhar_card, Validators.required),
          isdisable: new FormControl('false', Validators.required),
          status_id: new FormControl(this.updateMaid[0].status_id, Validators.required),
          phoneno1: new FormControl(this.updateMaid[0].phoneno1, Validators.required),
          phoneno2: new FormControl(this.updateMaid[0].phoneno2, Validators.required),
        })
      })
    }
    
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
      aadhar_card: new FormControl('', Validators.required),
      isdisable: new FormControl('false', Validators.required),
      status_id: new FormControl('', Validators.required),
      phoneno1: new FormControl('', Validators.required),
      phoneno2: new FormControl('', Validators.required)

    })

  }
  submit() {
  
    if (this.id) {
      this.maidService.updateMaid(this.myForm.value).subscribe(res => {
      })
      this.rout.navigateByUrl('/admin-maid')
    }
    else {
      this.maidService.addMaid(this.myForm.value).subscribe(res => {
      
      })
      this.rout.navigateByUrl('/admin-maid')
    }
  }
}