import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  list: any[]
  constructor(private service: FeedbackService) { }

  ngOnInit(): void {
    this.service.getFeedback().then(res => {
      this.list = res
    })
  }

  delete(value: any){
    this.service.deleteFeedback(value).subscribe(res => {
    })
  }

}
