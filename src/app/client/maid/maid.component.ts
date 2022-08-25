import { Component, OnInit } from '@angular/core';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-maid',
  templateUrl: './maid.component.html',
  styleUrls: ['./maid.component.css']
})
export class MaidComponent implements OnInit {

  list: any[]
  public searchFilter: any = '';
  query:  []
  constructor(private maidService: MaidService) { }

  ngOnInit(): void {
    this.maidService.getAllMaidDetail().then(res => {
      this.list = res
     
    })
  }

}
