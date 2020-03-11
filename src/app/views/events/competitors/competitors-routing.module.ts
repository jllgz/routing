import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitorsPage } from './competitors.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitorsPage
  },
  {
    path: 'scores',
    loadChildren: () => import('./scores/scores.module').then( m => m.ScoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitorsPageRoutingModule {}
