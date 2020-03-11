import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },

  {
    path: 'sign-in',
    loadChildren: () => import('./views/sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./views/events/events.module').then(m => m.EventsPageModule)
  }

  // children routering #1
  // {
  //   path: 'events',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/events/events.module').then(m => m.EventsPageModule)
  //     },
  //     {
  //       path: 'competitors',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () => import('./views/events/competitors/competitors.module').then(m => m.CompetitorsPageModule)
  //         },
  //         {
  //           path: 'scores',
  //           loadChildren: () => import('./views/events/competitors/scores/scores.module').then(m => m.ScoresPageModule)
  //         },
  //       ]
  //     }
  //   ]
  // },

   // children routing #2
  // {
  //   path: 'events',
  //   loadChildren: () => import('./views/events/events.module').then(m => m.EventsPageModule)
  // },
  // {
  //   path: 'events/competitors',
  //   loadChildren: () => import('./views/events/competitors/competitors.module').then(m => m.CompetitorsPageModule)
  // },
  // {
  //   path: 'events/competitors/scores',
  //   loadChildren: () => import('./views/events/competitors/scores/scores.module').then(m => m.ScoresPageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
