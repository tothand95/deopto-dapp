import { Component } from '@angular/core';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrls: ['./home-shell.component.scss']
})
export class HomeShellComponent {

  navigateBuyDeopto(){
    window.open('https://pancakeswap.finance/swap?outputCurrency=0xF918C5f9fcee3FFE7C27612e76eB2d27AA357e90', '_blank');
  }

}