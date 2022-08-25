import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  maid_id = 0
  myForm: FormGroup
  constructor(private router: ActivatedRoute, private service: FeedbackService, private rout: Router, private messageService: MessageService) { }
  countStar(star: any) {
    this.selectedValue = star;
 
  }
  ngOnInit(): void {
    this.maid_id = this.router.snapshot.params.maid_id
    let client_id = sessionStorage.getItem('isClientId')

    this.myForm = new FormGroup({
      client_id: new FormControl(client_id, Validators.required),
      maid_id: new FormControl(this.maid_id, Validators.required),
      comments: new FormControl('', Validators.required),
    })
  }


  submit() {
    this.myForm.addControl("rating", new FormControl(this.selectedValue))


    this.service.addFeedback(this.myForm.value).subscribe(res => {

    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Feedback submitted successfully' });
    this.rout.navigate(['/'])
  }
}
