import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  myForm: FormGroup
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.service.sendAdminForgotPassword(this.myForm.value).subscribe(res => {
      console.log("done");

    })
  }
}
