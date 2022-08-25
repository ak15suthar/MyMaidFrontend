import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { MaidCategoryService } from 'src/app/service/maid-category.service';

@Component({
  selector: 'app-maidcategory',
  templateUrl: './maidcategory.component.html',
  styleUrls: ['./maidcategory.component.css']
})
export class MaidcategoryComponent implements OnInit {
  myForm: FormGroup
  id = 0
  category_id = 0
  list: any[]
  listcategory: any[]

  public category: any[] = [{
    //id: 1,
    maid_id: '',
    category_id: '',
    charge: ''
  }];
  constructor(private serviceMaidCategory: MaidCategoryService,
    private serviceCategory: CategoryService, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.maid_id
    

    this.category_id = this.router.snapshot.params.category_id
   
    this.serviceCategory.getCategory().then(res => {
      this.list = res
     
    })

    if (this.id && this.category_id) {
      this.serviceMaidCategory.getMaidCategoryById(this.id, this.category_id).then(res => {
        this.listcategory = res
      

        this.myForm = new FormGroup({

          maid_id: new FormControl(this.listcategory[0].maid_id, Validators.required),
          category_id: new FormControl(this.listcategory[0].category_id, Validators.required),
          charge: new FormControl(this.listcategory[0].charge, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      maid_id: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      charge: new FormControl('', Validators.required)
    })

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
     
      this.serviceMaidCategory.updateMaidCategory(this.myForm.value).subscribe(res => {
      })
      this.rout.navigate(['/admin-maidprofile',this.id]);
      
    }
    else {
      this.myForm.addControl("cat", new FormControl(this.category))
    

      for (let index = 0; index < this.myForm.value.cat.length; index++) {
        this.serviceMaidCategory.addMaidCategory(this.myForm.value.cat[index]).subscribe(res => {
         
        })
        this.rout.navigate(['/admin-maidprofile',this.id]);

      }
    }
  }

}
