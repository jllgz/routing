import { competitors } from './../../../shared/services/locale/competitors';
import { SdataService } from './../../../shared/services/sdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.page.html',
  styleUrls: ['./competitors.page.scss'],
})
export class CompetitorsPage implements OnInit {
  allCompetitors: any[] = competitors;

  constructor(
    private data: SdataService,
    private router: Router) { }

  ngOnInit() {
  }
  changeCompetitor(comp) {
    this.data.sendCompetitor(comp);
    this.router.navigate(['/events/competitors/scores']);

  }

}
