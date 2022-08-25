import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/interface/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  myForm: FormGroup
  data: Admin
  updateProfile: any[]
  fileToUpload: File;
  uploadedFiles: string[] = [];
  imagePath: string;
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isAdminId')
    console.log("id ", id);
    if (id) {
      this.service.getAdminById(id).then(res => {
        this.data = res[0]
        console.log("d ",this.data);
        
        // console.log("Admin: ", this.data.gender);

        this.myForm = new FormGroup({
          admin_id: new FormControl(this.data.admin_id, Validators.required),
          fname: new FormControl(this.data.fname, Validators.required),
          lname: new FormControl(this.data.lname, Validators.required),
          email: new FormControl(this.data.email, Validators.required),
          gender: new FormControl(this.data.gender, Validators.required),
          dob: new FormControl(this.data.dob, Validators.required),
          profile: new FormControl(this.uploadedFiles, Validators.required),
        })
      })
    }
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
      console.log("file", file);

      this.service.postFile(file[0]).subscribe(res => {
        this.uploadedFiles.push(res["name"])
        console.log("upload", this.uploadedFiles);

      })
    }
  }

  submit() {
    console.log("f ", this.myForm.value);

    this.service.updateAdmin(this.myForm.value).subscribe(res => {
      console.log(this.myForm.value);
    })
  }
}
