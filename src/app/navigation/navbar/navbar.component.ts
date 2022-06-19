import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/main.routes';
import { MenuIcons } from './menu-items.enum';
import { Component } from '@angular/core';
import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';

@Component({
  selector: 'soul-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  icons = MenuIcons;
  autocompleteParams = {
    placeholder: 'Search',
  } as SoulInputParams;

  constructor(private readonly router: Router) {}

  makeActive(eventTarget: EventTarget | null): void {
    const element = eventTarget as HTMLDivElement;
    const menuItem = element.outerText;

    return this.redirectToPage(menuItem);
  }

  navigateToHome(): void {
    return this.redirectToPage(RoutesNames.Home);
  }

  redirectToPage(menuItem: string): void {
    switch (menuItem) {
      case this.icons.Home:
        this.router.navigateByUrl(RoutesNames.Home);
        break;
      case this.icons.QuestionAnswer:
        this.router.navigateByUrl(RoutesNames.MessageCenter);
        break;
      case this.icons.Notifications:
        this.showNotification();
        break;
      case this.icons.Face:
        this.router.navigateByUrl(RoutesNames.Account);
        break;
    }
  }

  private showNotification(): void {
    // TODO show small modal
  }
}
