import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddressService } from 'src/app/service/address.service';
import { BookingService } from 'src/app/service/booking.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  myForm: FormGroup
  maid_id = 0
  listCat: any[]
  listAdd: any[]

  constructor(private router: ActivatedRoute, private maidCatService: MaidCategoryService,
    private addService: AddressService, private bookService: BookingService,private rout:Router, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    let m = sessionStorage.getItem('isClientId')
    this.maid_id = this.router.snapshot.params.maid_id

    if (this.maid_id) {
      this.maidCatService.getMaidCategoryByMaidId(this.maid_id).then(res => {
        this.listCat = res
        
      })
   }

    if (m) {
      this.addService.getAddressById(m).then(res => {
        this.listAdd = res
       

      })
    }
    if (m) {
      this.myForm = new FormGroup({
        client_id: new FormControl(m, Validators.required),
        maid_id: new FormControl(this.maid_id, Validators.required),
        category_id: new FormControl('', Validators.required),
        start_date: new FormControl('', Validators.required),
        end_date: new FormControl(Validators.required),
        prefer_start_time: new FormControl(Validators.required),
        prefer_end_time: new FormControl(Validators.required),
        house_size: new FormControl('', Validators.required),
        address_id: new FormControl('', Validators.required),
        comments: new FormControl('', Validators.required),
        status_id: new FormControl(1, Validators.required),
      })
    }
  }

  submit() {
   
    this.bookService.addBooking(this.myForm.value).subscribe(res => {
    
    })
    let id = this.myForm.value.maid_id
   
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Maid book successfully' });
    this.rout.navigate(['/feedback',id])
  }
}
