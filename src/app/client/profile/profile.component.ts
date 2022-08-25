import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/interface/client';
import { Maid } from 'src/app/interface/maid';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: Client
  constructor(private service: ClientService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isClientId')
    if (id) {
      this.service.getClientById(id).then(res => {
        this.data = res[0]
      })
    }
  }

}
