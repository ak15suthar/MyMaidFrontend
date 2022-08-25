import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Maid } from 'src/app/interface/maid';
import { CategoryService } from 'src/app/service/category.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';
import { MaidService } from 'src/app/service/maid.service';
import { MaidcategoryComponent } from '../maidcategory/maidcategory.component';

@Component({
  selector: 'app-maidprofile',
  templateUrl: './maidprofile.component.html',
  styleUrls: ['./maidprofile.component.css']
})
export class MaidprofileComponent implements OnInit {
 
  list: any[]
  id = 0
  data: Maid
 
  constructor(private service: MaidService, private service1:MaidCategoryService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.maid_id
   

    this.service.getMaidById(this.id).then(res => {
      this.data = res[0]
    
    })
 
    this.service1.getMaidCategory(this.id).then(res => {
      this.list = res
    })
  }

  

  delete(value1:any, value2:any){
    this.service1.deleteMaidCategory(value1, value2).subscribe(res => {
     
    })
  }
}
