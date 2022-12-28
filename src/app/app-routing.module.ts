import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { VoteComponent } from './components/vote/vote.component';
import { VotingProcedureComponent } from './components/voting-procedure/voting-procedure.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'whitepaper', component: WhitepaperComponent },
  { path: 'voting-procedure', component: VotingProcedureComponent },
  { path: 'roadmap', component: RoadmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
