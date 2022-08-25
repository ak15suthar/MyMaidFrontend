import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-maid',
  templateUrl: './maid.component.html',
  styleUrls: ['./maid.component.css']
})
export class MaidComponent implements OnInit {

  list: any[]

  constructor(private router: Router, private service: MaidService) { }

  ngOnInit(): void {
    this.service.getMaid().then(res => {
      this.list = res
    
      
    })
  }

  delete(value: any) {
    this.service.deleteMaid(value).subscribe(res => {
       
    })
  }
}
