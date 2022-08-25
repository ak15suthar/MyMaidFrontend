import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  myForm: FormGroup
  id = 0
  updateCategory: any[]
  constructor(private service: CategoryService, private router: ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.category_id
  

    if (this.id) {
      this.service.getCategoryById(this.id).then(res => {
        this.updateCategory = res
        this.myForm = new FormGroup({
          category_id: new FormControl(this.updateCategory[0].category_id, Validators.required),
          category_name: new FormControl(this.updateCategory[0].category_name, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      category_name: new FormControl('', Validators.required)
    })
  }

  submit() {
   
    if (this.id) {
      this.service.updateCategory(this.myForm.value).subscribe(res => {
      })
      this.rout.navigateByUrl('/admin-category')
    }
    else {
      this.service.addCategory(this.myForm.value).subscribe(res => {
      
      })
      this.rout.navigateByUrl('/admin-category')
    }
  }
}
