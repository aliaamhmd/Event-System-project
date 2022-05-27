import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from '../speaker.service';
import { Speaker } from '../_models/speaker';

@Component({
  selector: 'app-spk-sign-up',
  templateUrl: './spk-sign-up.component.html',
  styleUrls: ['./spk-sign-up.component.css']
})
export class SpkSignUpComponent implements OnInit,OnDestroy {
  spk:Speaker=new Speaker("",0,"","","","","","")
  sub:Subscription|null=null;
  Save(){
    this.spkser.AddSpeaker(this.spk).subscribe(a=>{console.log(a)
    this.router.navigate(["/login"])
    })
    }

  constructor(public spkser:SpeakerService,public router:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
