import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  addAddress(model: any):Observable<any>{
    return this.http.post(`${environment.base_URL}addAddress`, model)
  }

  getAddress():Promise<any>{
    return this.http.get(`${environment.base_URL}getAddress`).toPromise()
  }

  getAddressById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getAddressById/${id}`).toPromise()
  }

  getAddressByAddressId(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getAddressByAddressId/${id}`).toPromise()
  }

  updateAddress(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateAddress`, model)
  }

  deleteAddress(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteAddress/${id}`)
  }
}
