import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-strip-tokenomics',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-strip-tokenomics.component.html',
  styleUrls: ['./landing-strip-tokenomics.component.scss']
})
export class LandingStripTokenomicsComponent {

  reflectionPercent: number = 5;
  liquidityAcqPercent: number = 2;
  pollFundingPercent: number = 3;

}
