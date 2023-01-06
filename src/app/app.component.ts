import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fadeShowAnimation } from './constants/animation';
import { DeoptoRoutes } from './constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeShowAnimation]
})
export class AppComponent {
  isHeaderDummyDisplayed: boolean = false;
  isMenuOpen: boolean = false;

  get currentLanguage() {
    return this.translateService.currentLang.toUpperCase();
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute, private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isHeaderDummyDisplayed = !val.urlAfterRedirects.includes(DeoptoRoutes.HOME);
        this.isMenuOpen = false;
      }
    });
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(_event: Event) {
  //   this.onTop = window.scrollY === 0;
  // }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.activeRoute.root });
  }

  onMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.isMenuOpen = false;
  }
}
