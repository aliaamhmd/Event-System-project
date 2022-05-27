import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from './../../_models/event';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  sub:Subscription|null=null;
  evs:Event[]=[];
  constructor(public evserv:EventService) { }

  ngOnInit(): void {
    this.sub=this.evserv.getAllEvents().subscribe(a=>{
      console.log(a)
      
    this.evs=a;
  })
  }

}
