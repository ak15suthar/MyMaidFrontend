import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-sendclient-email',
  templateUrl: './sendclient-email.component.html',
  styleUrls: ['./sendclient-email.component.css']
})
export class SendclientEmailComponent implements OnInit {
  myForm:FormGroup
  constructor(private service:ClientService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      email:new FormControl('', Validators.required)
    })
  }

  submit(){
    this.service.sendClientForgotPassword(this.myForm.value).subscribe(res=>{
      console.log("done");
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Please check your email' });
    
    })
  }
}
