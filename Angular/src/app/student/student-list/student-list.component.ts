import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit,OnDestroy {
   sub:Subscription|null=null
  constructor(public stderv:StudentService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  stds:Student[]=[];

  ngOnInit(): void {
    this.sub=this.stderv.getAllStudents().subscribe(a=>{
      
      this.stds=a;
      
    })
    
  }

}
