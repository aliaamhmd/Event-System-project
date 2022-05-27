import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDeleteComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[StudentListComponent]
})
export class StudentModule { }
