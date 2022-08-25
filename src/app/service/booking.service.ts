import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addBooking(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addBooking`, model)
  }

  getBooking(): Promise<any> {
    return this.http.get(`${environment.base_URL}getBooking`).toPromise()
  }

  getBookingByClientid(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getBookingByClientid/${id}`).toPromise()
  }

  getBookingByMaidId(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getBookingByMaidId/${id}`).toPromise()
  }

  updateBookingStatus(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateBookingStatus`,model)
  }
}
