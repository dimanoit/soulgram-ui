import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from './main.routes';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'soul-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  get isAuthorized(): boolean {
    return this.localStorageService.getToken() !== null;
  }

  //TODO Auth Guard
}
