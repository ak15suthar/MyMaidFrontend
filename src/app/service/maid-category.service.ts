import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaidCategoryService {

  constructor(private http:HttpClient) { }

  addMaidCategory(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addMaidCategory`,model)
  }

  getMaidCategory(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getMaidCategory/${id}`).toPromise()
  }

  getMaidCategoryById(maidid:any, categoryid:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getMaidCategoryById/${maidid}/${categoryid}`).toPromise()
  }

  updateMaidCategory(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateMaidCategory`, model)
  }

  deleteMaidCategory(maidid:any, categoryid:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteMaidCategory/${maidid}/${categoryid}`)
  }

  getMaidCategoryByMaidId(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getMaidCategoryByMaidId/${id}`).toPromise()
  }
}
