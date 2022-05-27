import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerUpdateComponent } from './speaker-update/speaker-update.component';
import { SpeakerDeleteComponent } from './speaker-delete/speaker-delete.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerUpdateComponent,
    SpeakerDeleteComponent,
    SpeakerDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ]
})
export class SpeakerModule { }
