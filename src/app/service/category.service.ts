import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: any): Observable<any>{
    return this.http.post(`${environment.base_URL}addCategory`, model)
  }

  getCategory():Promise<any>{
    return this.http.get(`${environment.base_URL}getCategory`).toPromise()
  }

  getCategoryById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getCategoryById/${id}`).toPromise()
  }

  updateCategory(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateCategory`, model)
  }

  deleteCategory(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteCategory/${id}`)
  }
}
