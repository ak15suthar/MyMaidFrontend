import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: ClientService, private rut: Router) { }
  dob: Date
  ngOnInit(): void {
    let id = sessionStorage.getItem('isClientId');
    if (id) {
      this.service.getClientById(id).then(res => {
        this.dob = res[0].dob
      
      })
    }
  }
  get isClientLogIn() {
    return this.service.isClientLogIn();
  }
  logout() {
    sessionStorage.clear();
    this.rut.navigate(['/home']);
  }


}
