import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminLogin(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}getAdminLogin`, model)
  }

  getAdmin(): Promise<any> {
    return this.http.get(`${environment.base_URL}getAdmin`).toPromise()
  }

  getAdminById(id: any): Promise<any> {
    return this.http.get(`${environment.base_URL}getAdminById/${id}`).toPromise()
  }

  updateAdmin(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateAdmin`, model)
  }

  changeAdminPassword(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}changeAdminPassword`, model)
  }

  isAdminLogin() {
    if (sessionStorage.getItem('isAdmin')) {
      return true;
    }
    return false;
  }

  sendAdminForgotPassword(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}sendAdminForgotPassword`, model)
  }

  forgotAdminPassword(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}forgotAdminPassword`, model)
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'upload';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(map(i => { return i }));
  }
}


