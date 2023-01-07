import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isHeaderDummyDisplayed: boolean = false;
  isMenuOpen: boolean = false;

  get currentLanguage() {
    return this.translateService.currentLang.toUpperCase();
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute, private translateService: TranslateService) { }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.activeRoute.root });
    this.isMenuOpen = false;
  }

  onMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.isMenuOpen = false;
  }
}
