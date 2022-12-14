import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: '**', redirectTo: '/leaderboard', pathMatch: 'full' }
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
