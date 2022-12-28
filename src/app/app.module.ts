import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderReactDirective } from './directives/render-react.directive';
import { VoteComponent } from './components/vote/vote.component';
import { HomeComponent } from './components/home/home.component';
import { VotingProcedureComponent } from './components/voting-procedure/voting-procedure.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderReactDirective,
    VoteComponent,
    HomeComponent,
    VotingProcedureComponent,
    WhitepaperComponent,
    RoadmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
