import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  addClient(model: any):Observable<any>{
    return this.http.post(`${environment.base_URL}addClient`, model)
  }

  getClient():Promise<any>{
    return this.http.get(`${environment.base_URL}getClient`).toPromise()
  }

  getClientById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getClientById/${id}`).toPromise()
  }

  updateClient(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateClient`, model)
  }

  deleteClient(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteClient/${id}`)
  }

  getClientLogin(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}getClientLogin`,model)
  }

  changeClientPassword(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}changeClientPassword`,model)
  }

  forgotClientPassword(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}forgotClientPassword`, model)
  }

  sendClientForgotPassword(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}sendClientForgotPassword`,model)
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'upload';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(map(i => { return i }));
  }

  isClientLogIn(){
    if(sessionStorage.getItem('isClient')){
      return true;
    }
    return false;
  }
}
