import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deopto-dapp';
  onTop = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(_event: Event) {
    this.onTop = window.scrollY === 0;
  }
}
