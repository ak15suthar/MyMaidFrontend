import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  addLocation(model: any): Observable<any>{
    return this.http.post(`${environment.base_URL}addLocation`, model)
  }

  getLocation():Promise<any>{
    return this.http.get(`${environment.base_URL}getLocation`).toPromise()
  }

  getLocationById(id:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getLocationById/${id}`).toPromise()
  }

  getLocationByCity(city:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getLocationByCity/${city}`).toPromise()
  }

  updateLocation(model: any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateLocation`, model)
  }

  deleteLocation(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteLocation/${id}`)
  }
}
