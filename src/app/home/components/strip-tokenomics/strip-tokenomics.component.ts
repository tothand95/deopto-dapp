import { Component } from '@angular/core';

@Component({
  selector: 'app-strip-tokenomics',
  templateUrl: './strip-tokenomics.component.html',
  styleUrls: ['./strip-tokenomics.component.scss']
})
export class StripTokenomicsComponent {

  reflectionPercent: number = 5;
  liquidityAcqPercent: number = 2;
  pollFundingPercent: number = 3;

}
