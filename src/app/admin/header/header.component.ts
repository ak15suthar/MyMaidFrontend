import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AdminService, private rout:Router) { }

  ngOnInit(): void {
  }

  get isAdminLogin(){
    return this.service.isAdminLogin()
  }

  logout(){
    sessionStorage.clear()
    this.rout.navigate(['/login'])
  }
}
