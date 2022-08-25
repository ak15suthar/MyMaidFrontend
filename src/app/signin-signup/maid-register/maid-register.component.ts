import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-maid-register',
  templateUrl: './maid-register.component.html',
  styleUrls: ['./maid-register.component.css']
})
export class MaidRegisterComponent implements OnInit {
  myForm: FormGroup
  fileToUpload: File;
  uploadedFiles: string[] = [];
  listPincode: any[]
  constructor(private pincodeService: LocationService, private service:MaidService, private rout: Router) { }

  ngOnInit(): void {

    this.pincodeService.getLocation().then(res => {
      this.listPincode = res
      console.log("list ", this.listPincode);

    })

    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      profile: new FormControl(this.uploadedFiles, Validators.required),
      aadhar_card: new FormControl(this.uploadedFiles, Validators.required),
      isdisable: new FormControl(0, Validators.required),
      status_id: new FormControl(1, Validators.required),
      phoneno1: new FormControl('', Validators.required),
      phoneno2: new FormControl('', Validators.required)
    })
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
      this.service.postFile(file[0]).subscribe(res => {
        this.uploadedFiles.push(res["name"])
      })
    }
  }

  submit() {
    this.service.addMaid(this.myForm.value).subscribe(res =>{
      console.log("done");   
      
    })
    this.rout.navigate(['/maid-login'])
    this.service.sendFormData(this.myForm.value).subscribe(res=>{
      console.log("sent");
      
    })
  }
}
