import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/interface/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  myForm: FormGroup
  data: Client
  fileToUpload: File;
  uploadedFiles: string[] = [];
  imagePath: string;
  constructor(private service: ClientService, private rout:Router, private messageService: MessageService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isClientId')
   
    if (id) {
      this.service.getClientById(id).then(res => {
        this.data = res[0]
       

        this.myForm = new FormGroup({
          client_id: new FormControl(this.data.client_id, Validators.required),
          fname: new FormControl(this.data.fname, Validators.required),
          lname: new FormControl(this.data.lname, Validators.required),
          gender: new FormControl(this.data.gender, Validators.required),
          dob: new FormControl(this.data.dob, Validators.required),
          email: new FormControl(this.data.email, Validators.required),
          password: new FormControl(this.data.password, Validators.required),
          profile: new FormControl(this.uploadedFiles, Validators.required),
          isdisble: new FormControl('false', Validators.required),
          phoneno1: new FormControl(this.data.phoneno1, Validators.required),
          phoneno2: new FormControl(this.data.phoneno2, Validators.required)
        })

      })
    }
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
     
      this.service.postFile(file[0]).subscribe(res => {
        this.uploadedFiles.push(res["name"])
       
      })
    }
  }

  submit() {
    this.service.updateClient(this.myForm.value).subscribe(res => {
      
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your profile has been updated' });

     this.rout.navigate(['/client-profile']);
  }
}
