import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  reflectionPercent: number = 5;
  liquidityAcqPercent: number = 2;
  pollFundingPercent: number = 3;

}
