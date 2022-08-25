import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddressService } from 'src/app/service/address.service';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  list: any[]
  myForm: FormGroup
  address_id = 0
  updateAddress: any
  constructor(private service: LocationService, private addresService: AddressService,
    private route: ActivatedRoute, private rout: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isClientId')
    this.service.getLocation().then(res => {
      this.list = res
    })
    this.address_id = this.route.snapshot.params.address_id
   

    if (this.address_id) {
      this.addresService.getAddressByAddressId(this.address_id).then(res => {
        this.updateAddress = res
       

        this.myForm = new FormGroup({
          address_id: new FormControl(this.updateAddress[0].address_id, Validators.required),
          client_id: new FormControl(this.updateAddress[0].client_id, Validators.required),
          door_no: new FormControl(this.updateAddress[0].door_no, Validators.required),
          street_name: new FormControl(this.updateAddress[0].street_name, Validators.required),
          pincode: new FormControl(this.updateAddress[0].pincode, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      client_id: new FormControl(id, Validators.required),
      door_no: new FormControl('', Validators.required),
      street_name: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    })
  }

  submit() {
   
    if (this.address_id) {
      this.addresService.updateAddress(this.myForm.value).subscribe(res => {

      })
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your address has been changed' });

      this.rout.navigate(['/address'])
    }
    else {
      this.addresService.addAddress(this.myForm.value).subscribe(res => {
       
      })
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New address added' });

      this.rout.navigate(['/address'])
    }
  }
}
