import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaidService {

  constructor(private http: HttpClient) { }

  addMaid(model: any): Observable<any>{
    return this.http.post(`${environment.base_URL}addMaid`, model)
  }

  getMaid():Promise<any>{
    return this.http.get(`${environment.base_URL}getMaid`).toPromise()
  }

  getMaidById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getMaidById/${id}`).toPromise()
  }

  updateMaid(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateMaid`, model)
  }

  deleteMaid(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteMaid/${id}`)
  }

  getMaidLogin(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}getMaidLogin`,model)
  }

  sendFormData(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}sendFormData`, model)
  }

  changeMaidPassword(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}changeMaidPassword`, model)
  }

  sendMaidForgotPassword(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}sendMaidForgotPassword`,model)
  }

  forgotMaidPassword(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}forgotMaidPassword`,model)
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'upload';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(map(i => { return i }));
  }

  getAllMaidDetail():Promise<any>{
    return this.http.get(`${environment.base_URL}getAllMaidDetail`).toPromise()
  }

  getMaidDetail(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getMaidDetail/${id}`).toPromise()
  }
}
