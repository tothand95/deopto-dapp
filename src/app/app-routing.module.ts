import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { VoteComponent } from './components/vote/vote.component';
import { VotingProcedureComponent } from './components/voting-procedure/voting-procedure.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { DeoptoRoutes } from 'src/app/constants/routes';
import { HomeShellComponent } from './home/components/home-shell/home-shell.component';
import { HowToBuyComponent } from './components/how-to-buy/how-to-buy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DeoptoRoutes.HOME },
  { path: DeoptoRoutes.HOME, component: HomeShellComponent },
  { path: DeoptoRoutes.VOTE, component: VoteComponent },
  { path: DeoptoRoutes.WHITEPAPER, component: WhitepaperComponent },
  { path: DeoptoRoutes.VOTING_PROCEDURE, component: VotingProcedureComponent },
  { path: DeoptoRoutes.ROADMAP, component: RoadmapComponent },
  { path: DeoptoRoutes.HOW_TO_BUY, component: HowToBuyComponent },
  { path: '**', redirectTo: DeoptoRoutes.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
