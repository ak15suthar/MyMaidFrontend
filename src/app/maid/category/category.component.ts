import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
list:any
  constructor(private service:MaidCategoryService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isMaidId')
    this.service.getMaidCategoryByMaidId(id).then(res => {
      this.list = res
      
    })
  }

  delete(value1:any,value2:any){
    this.service.deleteMaidCategory(value1, value2).subscribe(res => {
     
    })
  }

}
