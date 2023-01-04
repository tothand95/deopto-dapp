import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './components/home-shell/home-shell.component';
import { StripInnovationComponent } from './components/strip-innovation/strip-innovation.component';
import { StripPowerComponent } from './components/strip-power/strip-power.component';
import { StripTokenomicsComponent } from './components/strip-tokenomics/strip-tokenomics.component';
import { StripLaunchComponent } from './components/strip-launch/strip-launch.component';
import { TranslateModule } from '@ngx-translate/core';
import { StripTeamComponent } from './components/strip-team/strip-team.component';



@NgModule({
  declarations: [
    HomeShellComponent,
    StripInnovationComponent,
    StripPowerComponent,
    StripTokenomicsComponent,
    StripLaunchComponent,
    StripTeamComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [
    HomeShellComponent
  ]
})
export class HomeModule { }