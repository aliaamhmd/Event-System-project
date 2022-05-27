import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventDeleteComponent } from './event/event-delete/event-delete.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventUpdateComponent } from './event/event-update/event-update.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDeleteComponent } from './speaker/speaker-delete/speaker-delete.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerUpdateComponent } from './speaker/speaker-update/speaker-update.component';
import { SpkSignUpComponent } from './spk-sign-up/spk-sign-up.component';
import { StdSignUpComponent } from './std-sign-up/std-sign-up.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';


const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"header",component:HeaderComponent},
  {path:"stdSignUp",component:StdSignUpComponent},
  {path:"spkSignUp",component:SpkSignUpComponent},
  {path:"Students",component:StudentListComponent},
  {path:"Students/Add",component:StudentAddComponent},
  {path:"Students/Details/:id",component:StudentDetailsComponent},
  {path:"Students/Update/:id",component:StudentUpdateComponent},
  {path:"Students/Delete/:id",component:StudentDeleteComponent},
  {path:"Speakers",component:SpeakerListComponent},
  {path:"Speakers/Add",component:SpeakerAddComponent},
  {path:"Speakers/Details/:id",component:SpeakerDetailsComponent},
  {path:"Speakers/Update/:id",component:SpeakerUpdateComponent},
  {path:"Speakers/Delete/:id",component:SpeakerDeleteComponent},
  {path:"Events",component:EventListComponent},
  {path:"Events/Add",component:EventAddComponent},
  {path:"Events/Update/:id",component:EventUpdateComponent},
  {path:"Events/Delete/:id",component:EventDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

