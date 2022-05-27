import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit,OnDestroy {
 std:Student=new Student(0,"","")
 sub:Subscription|null=null;
 sub2:Subscription|null=null;
 sub3:Subscription|null=null;

  constructor(public stdser:StudentService,public actrout:ActivatedRoute,public route:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }
  Save(){
    this.sub=this.stdser.updateStudent(this.std).subscribe(a=>{
      console.log(a)
      this.route.navigate(['/Students'])
    })
 
    

  }

  ngOnInit(): void {

    this.sub2=this.actrout.params.subscribe(a=>{
     this.sub3=this.stdser.getStudentById(a['id']).subscribe(s=>{
        this.std=s;
      })
    })
  }

}
