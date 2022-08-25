import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Maid } from 'src/app/interface/maid';
import { LocationService } from 'src/app/service/location.service';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  myForm:FormGroup
  data:Maid
  listPincode: any[]
  fileToUpload: File;
  uploadedFiles: string[] = [];
  imagePath : string;
  constructor(private service:MaidService, private location: LocationService) { }

  ngOnInit(): void {
    this.location.getLocation().then(res=>{
      this.listPincode=res
    })

    let id=sessionStorage.getItem('isMaidId')
    this.service.getMaidById(id).then(res=>{
      this.data=res[0]
     
      this.myForm=new FormGroup({
        maid_id: new FormControl(this.data.maid_id, Validators.required),
        fname: new FormControl(this.data.fname, Validators.required),
        lname: new FormControl(this.data.lname, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        password: new FormControl(this.data.password, Validators.required),
        gender: new FormControl(this.data.gender, Validators.required),
        dob: new FormControl(this.data.dob, Validators.required),
        experience:new FormControl(this.data.experience,Validators.required),
        pincode:new FormControl(this.data.pincode,Validators.required),
        profile: new FormControl(this.uploadedFiles, Validators.required),
        aadhar_card:new FormControl(this.data.aadhar_card,Validators.required),
        isdisble: new FormControl('false', Validators.required),
        status_id:new FormControl(this.data.status_id,Validators.required),
        phoneno1: new FormControl(this.data.phoneno1, Validators.required),
        phoneno2: new FormControl(this.data.phoneno2, Validators.required)
      })
      // this.imagePath = this.data.profile;
    })
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
    
      
      this.service.postFile(file[0]).subscribe(res => {
        this.uploadedFiles.push(res["name"])
       
      })
    }
  }

  submit(){
    
    this.service.updateMaid(this.myForm.value).subscribe(res=>{
      
    })
  }
}
