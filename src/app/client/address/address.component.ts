import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interface/client';
import { AddressService } from 'src/app/service/address.service';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  list: any[]
  data: Client
  constructor(private service: AddressService, private client: ClientService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isClientId')
    if (id) {
      this.service.getAddressById(id).then(res => {
        this.list = res
       
      })

    }
    if(id){
      this.client.getClientById(id).then(res=>{
        this.data=res[0]
      
      })
    }
  }

}
