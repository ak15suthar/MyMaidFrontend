import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/interface/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  data: Admin
  m: any
  myForm: FormGroup
  public myData: any[] = [{
    admin_id: '',
    password: ''
  }];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.m = sessionStorage.getItem('isAdminId')
    console.log("m ", this.m);

    this.service.getAdminById(this.m).then(res => {
      this.data = res[0]
    })

    this.myForm = new FormGroup({
      oldpassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }


  submit() {
    if (this.data.password == this.myForm.value.oldpassword) {
      console.log("done");
      this.myData.push({
        admin_id: this.m,
        password: this.myForm.value.password
      });
      this.myForm.addControl("data", new FormControl(this.myData[1]))
      console.log("f ", this.myForm.value.data);

      this.service.changeAdminPassword(this.myForm.value.data).subscribe(res => {
        console.log("f ", this.myForm.value);

      })
    }
  }
}
