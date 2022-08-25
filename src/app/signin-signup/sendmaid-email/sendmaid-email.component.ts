import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-sendmaid-email',
  templateUrl: './sendmaid-email.component.html',
  styleUrls: ['./sendmaid-email.component.css']
})
export class SendmaidEmailComponent implements OnInit {

  myForm: FormGroup
  constructor(private service: MaidService, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.service.sendMaidForgotPassword(this.myForm.value).subscribe(res => {
      console.log("done");
    
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Please check your email' });
    // this.rout.navigate(['/admin-dashboard'])
    
    })
  }
}
