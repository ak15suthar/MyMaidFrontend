import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaidService } from 'src/app/service/maid.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-maid-login',
  templateUrl: './maid-login.component.html',
  styleUrls: ['./maid-login.component.css']
})
export class MaidLoginComponent implements OnInit {
  myForm: FormGroup

  constructor(private service: MaidService, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    // this.signupForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    //   fname:new FormControl('',Validators.required),
    //   lname:new FormControl('',Validators.required),

    // })

    // this.resetForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    // })
  }
  submit() {
    if (this.myForm.valid) {
      console.log("id: ", this.myForm.value);
      this.service.getMaidLogin(this.myForm.value).subscribe(res => {
        console.log("id:", res.status);
        let s = 200
        let notFound = 201
        let rs = res.status
        if (rs == s) {
          let m = res.data[0].maid_id
          console.log("m ", m);

          sessionStorage.setItem('isMaid', 'true')
          sessionStorage.setItem('isMaidId', m)
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
          this.rout.navigate(['/maid-dashboard'])
        }
        else if (rs == notFound) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter valid data' });
        }
      })

    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please enter your details' });
    }
    // signupSubmit() {
    //   this.service.addMaid(this.signupForm.value).subscribe(res => {
    //     console.log("done");

    //   })

    //   this.service.sendFormData(this.signupForm.value).subscribe(res => {
    //     console.log("sent");

    //   })
    // }

    // resetSubmit() {
    //   this.service.sendMaidForgotPassword(this.resetForm.value).subscribe(res => {
    //     console.log("done");

    //   })


  }
}
