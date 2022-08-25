import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-forgotpassword',
  templateUrl: './client-forgotpassword.component.html',
  styleUrls: ['./client-forgotpassword.component.css']
})
export class ClientForgotpasswordComponent implements OnInit {
  myForm:FormGroup
  email:string
  constructor(private service:ClientService, private router:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    this.email =this.router.snapshot.params.email
    this.myForm=new FormGroup({
      email: new FormControl(this.email, Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  submit(){
    this.service.forgotClientPassword(this.myForm.value).subscribe(res=>{
      console.log("done");
    
    })
    this.rout.navigate(['/client-login'])
  }
}
