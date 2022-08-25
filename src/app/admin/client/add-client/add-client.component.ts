import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  myForm: FormGroup
  id = 0
  updateClient: any
  fileToUpload: File;
  uploadedFiles: string[] = [];

  constructor(private clientService: ClientService, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.client_id
    
    if (this.id) {
      this.clientService.getClientById(this.id).then(res => {
        this.updateClient = res
        this.myForm = new FormGroup({
          client_id: new FormControl(this.updateClient[0].client_id, Validators.required),
          fname: new FormControl(this.updateClient[0].fname, Validators.required),
          lname: new FormControl(this.updateClient[0].lname, Validators.required),
          gender: new FormControl(this.updateClient[0].gender, Validators.required),
          dob: new FormControl(this.updateClient[0].dob, Validators.required),
          email: new FormControl(this.updateClient[0].email, Validators.required),
          password: new FormControl(this.updateClient[0].password, Validators.required),
          profile: new FormControl(this.uploadedFiles, Validators.required),
          isdisable: new FormControl('false', Validators.required),
          phoneno1: new FormControl(this.updateClient[0].phoneno1, Validators.required),
          phoneno2: new FormControl(this.updateClient[0].phoneno2, Validators.required)

        })

      })
    }

    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      profile: new FormControl(this.uploadedFiles, Validators.required),
      isdisable: new FormControl('false', Validators.required),
      phoneno1: new FormControl('', Validators.required),
      phoneno2: new FormControl('', Validators.required),

    })
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
      this.clientService.postFile(file[0]).subscribe(res => {
        this.uploadedFiles.push(res["name"])
      })
    }
  }

  submit() {
  
    if (this.id) {
      this.clientService.updateClient(this.myForm.value).subscribe(res => {
      })
      this.rout.navigateByUrl('/admin-client');
    }
    else {
      this.clientService.addClient(this.myForm.value).subscribe(res => {
      
      })
      this.rout.navigateByUrl('/admin-client');
    }
  }
}
