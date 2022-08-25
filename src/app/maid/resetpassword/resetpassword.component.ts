import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Maid } from 'src/app/interface/maid';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  data: Maid
  m: any
  myForm: FormGroup
  public myData: any[] = [{
    maid_id: '',
    password: ''
  }];
  constructor(public service:MaidService) { }

  ngOnInit(): void {
    this.m = sessionStorage.getItem('isMaidId')
  
    this.service.getMaidById(this.m).then(res => {
      this.data = res[0]
    })

    this.myForm = new FormGroup({
      oldpassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.data.password == this.myForm.value.oldpassword) {
    
      this.myData.push({
        maid_id: this.m,
        password: this.myForm.value.password
      });
      this.myForm.addControl("data", new FormControl(this.myData[1]))
     
      this.service.changeMaidPassword(this.myForm.value.data).subscribe(res => {
      
      })
    }
  }
}
