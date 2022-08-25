import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  myForm: FormGroup
  id: String | null
  category_id = 0
  listcategory: any[]
  list: any[]
  public category: any[] = [{
    maid_id: '',
    category_id: '',
    charge: ''
  }];
  constructor(private service: MaidCategoryService, private serviceCategory: CategoryService,
    private rout: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('isMaidId')

    // this.id = this.router.snapshot.params.maid_id
   

    this.category_id = this.router.snapshot.params.category_id
  

    this.serviceCategory.getCategory().then(res => {
      this.list = res
    
    })

    this.myForm = new FormGroup({
      maid_id: new FormControl(this.id, Validators.required),
      category_id: new FormControl('', Validators.required),
      charge: new FormControl('', Validators.required)
    })

    if (this.id && this.category_id) {
      this.service.getMaidCategoryById(this.id, this.category_id).then(res => {
        this.listcategory = res
     

        this.myForm = new FormGroup({

          maid_id: new FormControl(this.listcategory[0].maid_id, Validators.required),
          category_id: new FormControl(this.listcategory[0].category_id, Validators.required),
          charge: new FormControl(this.listcategory[0].charge, Validators.required)
        })
      })
    }
    this.category = [{ maid_id: this.id }]
  }

  addMore() {
    this.category.push({
      maid_id: this.id,
      category_id: '',
      charge: ''
    });
  }

  remove(i: number) {
    this.category.splice(i, 1);
  }
  submit() {
    if (this.category_id && this.id) {
      this.service.updateMaidCategory(this.myForm.value).subscribe(res => {

      })
      this.rout.navigate(['/maid-category']);

    }
    else {
      this.myForm.addControl("cat", new FormControl(this.category))
     

      for (let index = 0; index < this.myForm.value.cat.length; index++) {
        this.service.addMaidCategory(this.myForm.value.cat[index]).subscribe(res => {
         
        })
      }
      this.rout.navigate(['/maid-category']);
    }
  }
}

