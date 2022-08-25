import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  myForm: FormGroup
  email: string

  constructor(private router: ActivatedRoute, private service: AdminService) { }

  ngOnInit(): void {
    this.email = this.router.snapshot.params.email
    // console.log("e ", this.email);



    this.myForm = new FormGroup({
      email: new FormControl(this.email, Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.service.forgotAdminPassword(this.myForm.value).subscribe(res => {
      console.log("done");

    })
  }
}
