import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl="http://localhost:8080/login/"
  login(logdata:any){
    return this.http.post<any>(this.baseurl,logdata)
  }

  constructor(public http:HttpClient) { }
}
