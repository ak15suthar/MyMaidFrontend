import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list: any[]
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategory().then(res => {
      this.list = res
    })
  }

  delete(value:any){
    this.service.deleteCategory(value).subscribe(res => {
    })
  }
}
