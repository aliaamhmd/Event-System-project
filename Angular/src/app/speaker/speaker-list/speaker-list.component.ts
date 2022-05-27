import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit,OnDestroy {
  sub:Subscription|null=null;
  spks:Speaker[]=[];

  constructor(public spkser:SpeakerService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub=this.spkser.getAllSpeakers().subscribe(a=>{
      
      this.spks=a;
  })

}
}
