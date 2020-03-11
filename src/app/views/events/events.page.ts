import { SdataService } from './../../shared/services/sdata.service';
import { events } from './../../shared/services/locale/events';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private data: SdataService) { }

  ngOnInit() {
  
  }

}
