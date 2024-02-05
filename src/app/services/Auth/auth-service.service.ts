import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl='http://localhost:4200/';

  constructor(private http:HttpClient) { 
  }
  authSubject=new BehaviorSubject<any>({
    user:null
  })
  login(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signin`,userData)
  }
  register(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signup`,userData)
  }
  //getUserProfile():Observable<any>{
   // return this.http.post<any>(`${this.baseUrl}/auth/signin`,userData)
  //}
}
