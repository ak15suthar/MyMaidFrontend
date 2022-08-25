import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  addFeedback(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addFeedback`,model)
  }

  getFeedback():Promise<any>{
    return this.http.get(`${environment.base_URL}getFeedback`).toPromise()
  }

  getFeedbackByMaidId(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getFeedbackByMaidId/${id}`).toPromise()
  }
  deleteFeedback(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteFeedback/${id}`)
  }
}
