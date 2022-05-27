import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit,OnDestroy {
  std:Student=new Student(0,"","")
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;

  constructor(public stdser:StudentService,public actrout:ActivatedRoute,public route:Router) { }
  // delete(){
  //   this.sub3=this.stdser.deleteStudent(this.std).subscribe()
  //   this.route.navigate(['/Students'])

  // }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    // this.sub3?.unsubscribe();
    }

  ngOnInit(): void {
    this.sub=this.actrout.params.subscribe(a=>{
      this.sub2=this.stdser.deleteStudent(a['id']).subscribe(s=>{
      this.route.navigate(['/Students'])

      });
     

        
      })
      


    
  }

}
