import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';
import { Event } from './_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseurl="http://localhost:8080/Events/";
  httpOptions={headers:{}}
  getToken(){
    let headers_object=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("userToken"));
    this.httpOptions={headers:headers_object}}
  getAllEvents(){
    this.getToken();
    return this.http.get<Event[]>(this.baseurl,this.httpOptions)
  }
  AddEvent(ev:Event){
    return this.http.post<Event>(this.baseurl,ev)

  }
  getEventById(id:number){
    return this.http.get<Event>(this.baseurl+id)

  }
  updateEvent(ev:Event){
    return this.http.put<Event>(this.baseurl+ev._id,ev)

  }
  deleteEvent(id:number){
    return this.http.delete(this.baseurl+id)

  }

  constructor(public http:HttpClient) { }
}
