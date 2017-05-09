

import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcoming Angualr2 Conferences</h1>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click) ="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>
            </div>
        </div>    
    </div>
    `
})    

export class EventslistComponent implements OnInit{
  events:any

  constructor(private eventService: EventService,
              private toastr: ToastrService, private route:ActivatedRoute) {
    
  }

  handleThumbnailClick(eventName) {
     this.toastr.success(eventName)
  }
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.route.snapshot.data['events']

  }

 
  
}