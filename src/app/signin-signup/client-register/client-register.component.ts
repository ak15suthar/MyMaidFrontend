import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  myForm:FormGroup
  fileToUpload: File;
  uploadedFiles: string[] = [];
  constructor(private service:ClientService, private rout:Router) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl(null, Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      profile: new FormControl(this.uploadedFiles, Validators.required),
      isdisable: new FormControl(0, Validators.required),
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

  submit(){
    console.log("data",this.myForm.value);
    
    this.service.addClient(this.myForm.value).subscribe(res =>{
      console.log("done");
      
    })
    this.rout.navigate(['/client-login']);
  }
}
