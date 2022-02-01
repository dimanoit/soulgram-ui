import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/main.routes';
import { MenuIcons } from './menu-items.enum';

@Component({
  selector: 'soul-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  icons = MenuIcons;

  ngOnInit(): void {}
  makeActive(eventTarget: EventTarget | null): void {
    const element = eventTarget as HTMLDivElement;
    const menuItem = element.outerText;

    return this.redirectToPage(menuItem);
  }

  private showNotification(): void {
    // TODO show small modal
  }

  redirectToPage(menuItem: string) {
    switch (menuItem) {
      case this.icons.Home:
        this.router.navigateByUrl(RoutesNames.Posts);
        break;
      case this.icons.QuestionAnswer:
        this.router.navigateByUrl(RoutesNames.MessageCenter);
        break;
      case this.icons.AddBox:
        this.router.navigateByUrl(RoutesNames.AddPost);
        break;
      case this.icons.Notifications:
        this.showNotification();
        break;
      case this.icons.Face:
        this.router.navigateByUrl(RoutesNames.Account);
        break;
    }
  }
}
