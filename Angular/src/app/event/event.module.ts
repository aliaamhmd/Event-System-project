import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EventListComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventDeleteComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ]
})
export class EventModule { }
