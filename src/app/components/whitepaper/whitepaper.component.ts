import { Component } from '@angular/core';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent {

  downloadWhitepaper() {
    window.open('/assets/global/Deopto-whitepaper-2022-11.pdf', '_blank');
  }

}