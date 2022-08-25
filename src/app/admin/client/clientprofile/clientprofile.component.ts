import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interface/client';
import { AddressService } from 'src/app/service/address.service';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {
  id = 0
  data: Client
  list: any[]
  constructor(private router: ActivatedRoute, private service: ClientService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.client_id
    if (this.id) {
      this.service.getClientById(this.id).then(res => {
        this.data = res[0]
      })
    }
    this.addressService.getAddressById(this.id).then(res => {
      this.list = res
    

    })
  }

  delete(value: any) {
    this.addressService.deleteAddress(value).subscribe(res => {
    })
  }
}
