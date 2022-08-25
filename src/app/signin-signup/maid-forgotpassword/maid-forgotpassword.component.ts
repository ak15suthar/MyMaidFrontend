import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-maid-forgotpassword',
  templateUrl: './maid-forgotpassword.component.html',
  styleUrls: ['./maid-forgotpassword.component.css']
})
export class MaidForgotpasswordComponent implements OnInit {
  myForm: FormGroup
  email: string
  constructor(private router: ActivatedRoute, private service: MaidService, private rout:Router) { }

  ngOnInit(): void {

    this.email = this.router.snapshot.params.email

    this.myForm = new FormGroup({
      email: new FormControl(this.email, Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.service.forgotMaidPassword(this.myForm.value).subscribe(res => {
      console.log("done");
    })
    this.rout.navigate(['/maid-login'])
  }
}
