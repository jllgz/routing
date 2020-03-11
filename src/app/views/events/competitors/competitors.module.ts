import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitorsPageRoutingModule } from './competitors-routing.module';

import { CompetitorsPage } from './competitors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitorsPageRoutingModule
  ],
  declarations: [CompetitorsPage]
})
export class CompetitorsPageModule {}
