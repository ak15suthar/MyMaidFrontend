import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interface/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  list: any[]
  data:Admin
  constructor(private service: AdminService) { }

  ngOnInit(): void {

    let m = sessionStorage.getItem('isAdminId')


    this.service.getAdminById(m).then(res => {
      this.data = res[0]
  
    })
  }

}
