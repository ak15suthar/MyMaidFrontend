import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  myForm: FormGroup
  constructor(private service: ClientService, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit() {


    if (this.myForm.valid) {
      this.service.getClientLogin(this.myForm.value).subscribe(res => {
        console.log("id:", res.status);
        let s = 200
        let notFound = 201
        let rs = res.status
        if (rs == s) {
          let m = res.data[0].client_id
          console.log("m ", m);

          sessionStorage.setItem('isClient', 'true')
          sessionStorage.setItem('isClientId', m)
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
          this.rout.navigate(['/'])
        }
        else if (rs == notFound) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter valid data' });
        }
      })
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please enter your details' });
    }
  }
}
