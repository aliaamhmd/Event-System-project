import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnDestroy {
  std:Student=new Student(0,"","");
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  constructor(public stdser:StudentService,public actrout:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();  }

  ngOnInit(): void {
    this.sub=this.actrout.params.subscribe(a=>{
     this.sub2=this.stdser.getStudentById(a['id']).subscribe(d=>{
        this.std=d;
        console.log(d)
      })
    })
  }


}
