import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-std-sign-up',
  templateUrl: './std-sign-up.component.html',
  styleUrls: ['./std-sign-up.component.css']
})
export class StdSignUpComponent implements OnInit, OnDestroy {
  std:Student=new Student(0,"","")
  sub:Subscription|null=null;
  Save(){
    this.stdser.AddStudent(this.std).subscribe(a=>{console.log(a)
      this.router.navigate(["/login"])

    })
    

  }

  constructor(public stdser:StudentService,public router:Router) { 
    
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
