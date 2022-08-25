import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/service/address.service';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  myForm: FormGroup
  clientid = 0
  addressid = 0
  listPincode: any[]
  updatAddress: any[]

  constructor(private router: ActivatedRoute, private pincodeService: LocationService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.pincodeService.getLocation().then(res => {
      this.listPincode = res
    

    })
    this.clientid = this.router.snapshot.params.client_id
    this.addressid = this.router.snapshot.params.address_id

   
    if (this.addressid) {
     
      
      this.addressService.getAddressByAddressId(this.addressid).then(res => {
        this.updatAddress = res
        this.myForm = new FormGroup({
          address_id: new FormControl(this.updatAddress[0].address_id, Validators.required),
          client_id: new FormControl(this.updatAddress[0].client_id, Validators.required),
          door_no: new FormControl(this.updatAddress[0].door_no, Validators.required),
          street_name: new FormControl(this.updatAddress[0].street_name, Validators.required),
          pincode: new FormControl(this.updatAddress[0].pincode, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      client_id: new FormControl(this.clientid, Validators.required),
      door_no: new FormControl('', Validators.required),
      street_name: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.addressid) {
      this.addressService.updateAddress(this.myForm.value).subscribe(res => {

      })
    } else {
      this.addressService.addAddress(this.myForm.value).subscribe(res => {
      })
    }
  }

}
