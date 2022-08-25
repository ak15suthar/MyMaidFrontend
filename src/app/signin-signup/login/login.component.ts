import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup
  constructor(private serviceAdmin: AdminService, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.myForm.valid) {
      this.serviceAdmin.getAdminLogin(this.myForm.value).subscribe(res => {
        //  console.log("id ", res.data[0].admin_id);
        let s = 200
        let notFound = 201
        let rs = res.status
        console.log("l ", rs);

        if (rs == s) {
          console.log();
          
          if (res.data[0].admin_id == 1) {
            let m = res.data[0].admin_id
            sessionStorage.setItem('isAdmin', 'true')
            sessionStorage.setItem('isAdminId', m)
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
            this.rout.navigate(['/admin-dashboard'])
          }
        }
        else if (rs == notFound) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter valid data' });
        }
        
      })
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Plase enter your details' });
    }
  }
}
