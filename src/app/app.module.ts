import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderReactDirective } from './directives/render-react.directive';
import { VoteComponent } from './components/vote/vote.component';
import { VotingProcedureComponent } from './components/voting-procedure/voting-procedure.component';
import { WhitepaperComponent } from './components/whitepaper/whitepaper.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HowToBuyComponent } from './components/how-to-buy/how-to-buy.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RenderReactDirective,
    VoteComponent,
    VotingProcedureComponent,
    WhitepaperComponent,
    RoadmapComponent,
    HowToBuyComponent
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

    HomeModule,
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
