import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deopto-dapp';
  onTop = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(_event: Event) {
    this.onTop = window.scrollY === 0;
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.activeRoute.root });
  }
}
