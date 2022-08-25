import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/interface/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  data: Client
  myForm: FormGroup
  m: any
  public myData: any[] = [{
    client_id: '',
    password: ''
  }];

  constructor(private service: ClientService, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.m = sessionStorage.getItem('isClientId')
   
    if (this.m) {
      this.service.getClientById(this.m).then(res => {
        this.data = res[0]
      })
    }
    this.myForm = new FormGroup({
      oldpassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.myForm.valid) {
      if (this.data.password == this.myForm.value.oldpassword) {
         this.myData.push({
          client_id: this.m,
          password: this.myForm.value.password
        });
        this.myForm.addControl("data", new FormControl(this.myData[1]))
       
        this.service.changeClientPassword(this.myForm.value.data).subscribe(res => {
          
        })
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your password has been changed' });
        this.rout.navigate(['/']);
      }
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please enter password' });
    }
  }
}
