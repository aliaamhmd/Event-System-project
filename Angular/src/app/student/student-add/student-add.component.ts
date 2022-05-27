import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit,OnDestroy {
   std:Student=new Student(0,"","")
   sub:Subscription|null=null;

   Save(){
     this.stdser.AddStudent(this.std).subscribe(a=>{console.log(a)
      this.route.navigate(['/Students'])
    })
     

   }

  constructor(public stdser:StudentService,public route:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
