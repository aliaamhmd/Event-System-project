import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-update',
  templateUrl: './speaker-update.component.html',
  styleUrls: ['./speaker-update.component.css']
})
export class SpeakerUpdateComponent implements OnInit,OnDestroy {
  spk:Speaker=new Speaker("",0,"","","","","","")
  sub: Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;

  constructor(public spkser:SpeakerService,public actrout:ActivatedRoute,public route:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();  }
    Save(){
      this.sub=this.spkser.updateSpeaker(this.spk).subscribe(a=>{
        console.log(a)
        this.route.navigate(['/Speakers'])
      })
      
}

  ngOnInit(): void {
    this.sub2=this.actrout.params.subscribe(a=>{
      this.sub3=this.spkser.getSpeakerById(a['id']).subscribe(s=>{
        console.log(s)
         this.spk=s;
       })
     })
  }

}
