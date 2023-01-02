import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fadeShowAnimation } from './constants/animation';
import { DeoptoRoutes } from './constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeShowAnimation]
})
export class AppComponent {
  title: string = 'deopto-dapp';
  onTop: boolean = true;
  isHeaderDummyDisplayed: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isHeaderDummyDisplayed = !val.url.includes(DeoptoRoutes.HOME);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(_event: Event) {
    this.onTop = window.scrollY === 0;
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.activeRoute.root });
  }
}
