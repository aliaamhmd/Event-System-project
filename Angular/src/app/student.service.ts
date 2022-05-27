import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl="http://localhost:8080/Students/"
  httpOptions={headers:{}}
  getToken(){
    let headers_object=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("userToken"));
    this.httpOptions={headers:headers_object}
  }
  getAllStudents(){
    this.getToken()

    return this.http.get<Student[]>(this.baseurl,this.httpOptions)
  }
  AddStudent(std:Student){
    return this.http.post<Student>(this.baseurl,std)

  }
  getStudentById(id:number){
    return this.http.get<Student>(this.baseurl+id)

  }
  updateStudent(std:Student){
    return this.http.put<Student>(this.baseurl+std._id,std)

  }
  deleteStudent(id:Number){
    return this.http.delete(this.baseurl+id)

  }

  constructor(public http:HttpClient) { }
}
