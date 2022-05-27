import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit,OnDestroy {
  spk:Speaker=new Speaker("",0,"","","","","","")
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;
  constructor(public spkser:SpeakerService,public actrout:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub=this.actrout.params.subscribe(a=>{
      this.sub2=this.spkser.getSpeakerById(a['id']).subscribe(d=>{
         this.spk=d;
         console.log(d)
       })
     })
  }

}
