import { SdataService } from './../../../../shared/services/sdata.service';
import { competitors } from './../../../../shared/services/locale/competitors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
   competitors: any;

  constructor(private data: SdataService) { }

  ngOnInit() {
    
    this.getCompetitors();
  }

  getCompetitors() {
    this.data.$competitors.subscribe(res => {
      this.competitors = res;
    });
    console.log(this.competitors);
  }

}
