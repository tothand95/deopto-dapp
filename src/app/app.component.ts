import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(router: Router, translateService: TranslateService) {
    const storageLang = localStorage.getItem('language');
    translateService.setDefaultLang('en');
    translateService.use(storageLang ?? 'en');

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isHeaderDummyDisplayed = !val.urlAfterRedirects.includes(DeoptoRoutes.HOME);
      }
    });
  }
}
