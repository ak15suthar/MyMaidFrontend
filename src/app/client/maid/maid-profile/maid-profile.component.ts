import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maid } from 'src/app/interface/maid';
import { FeedbackService } from 'src/app/service/feedback.service';
import { MaidService } from 'src/app/service/maid.service';

@Component({
  selector: 'app-maid-profile',
  templateUrl: './maid-profile.component.html',
  styleUrls: ['./maid-profile.component.css']
})
export class MaidProfileComponent implements OnInit {
  data: Maid
  id = 0
  stars=4
  list: any[]
  readonly:boolean
  constructor(private router: ActivatedRoute, private service: MaidService, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.maid_id

    this.service.getMaidById(this.id).then(res => {
      this.data = res[0]
     
    })

    this.feedbackService.getFeedbackByMaidId(this.id).then(res => {
      this.list = res
    
    })
  }


}
