import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseurl="http://localhost:8080/Speakers/";
  httpOptions={headers:{}}
  getToken(){
    let headers_object=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("userToken"));
    this.httpOptions={headers:headers_object}}
  getAllSpeakers(){
    this.getToken();
    return this.http.get<Speaker[]>(this.baseurl,this.httpOptions)
  }
  AddSpeaker(spk:Speaker){
    return this.http.post<Speaker>(this.baseurl,spk)

  }
  getSpeakerById(id:number){
    return this.http.get<Speaker>(this.baseurl+id)

  }
  updateSpeaker(spk:Speaker){
    return this.http.put<Speaker>(this.baseurl+spk._id,spk)

  }
  deleteSpeaker(id:number){
    return this.http.delete(this.baseurl+id)

  }

  constructor(public http:HttpClient) { }
}

