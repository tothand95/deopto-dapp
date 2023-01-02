import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderReactDirective } from './directives/render-react.directive';
import { VoteComponent } from './components/vote/vote.component';
import { HomeComponent } from './components/home/home.component';
import { VotingProcedureComponent } from './components/voting-procedure/voting-procedure.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LandingStripPowerComponent } from './shared/components/landing-strip-power/landing-strip-power.component';
import { LandingStripInnovationComponent } from './shared/components/landing-strip-innovation/landing-strip-innovation.component';
import { LandingStripLaunchComponent } from './shared/components/landing-strip-launch/landing-strip-launch.component';
import { LandingStripTokenomicsComponent } from './shared/components/landing-strip-tokenomics/landing-strip-tokenomics.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
    }),
    LandingStripPowerComponent,
    LandingStripInnovationComponent,
    LandingStripTokenomicsComponent,
    LandingStripLaunchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
