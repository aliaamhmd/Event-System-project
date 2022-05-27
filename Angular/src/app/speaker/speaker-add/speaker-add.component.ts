import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit,OnDestroy {
  spk:Speaker=new Speaker("",0,"","","","","","")
  sub:Subscription|null=null;
     Save(){
     this.spkser.AddSpeaker(this.spk).subscribe(a=>{console.log(a)
      this.route.navigate(['/Speakers'])}
     )
     }

  constructor(public spkser:SpeakerService,public route:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
