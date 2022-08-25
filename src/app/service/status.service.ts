import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) { }

  getStatus():Promise<any>{
    return this.http.get(`${environment.base_URL}getStatus`).toPromise()
  }
}
