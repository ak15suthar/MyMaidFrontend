import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  list: any[]

  constructor(private router: Router, private service: ClientService) { }

  ngOnInit(): void {
    this.service.getClient().then(res => {
      this.list = res
      
    })
  }

  delete(value: any){
    this.service.deleteClient(value).subscribe(res => {
    
    })
  }
}

