import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from './main.routes';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  get isAuthorized(): boolean {
    return this.localStorageService.getToken() !== null;
  }

  ngOnInit(): void {
    if (this.isAuthorized) {
      this.router.navigateByUrl(RoutesNames.Posts);
      return;
    }

    this.router.navigateByUrl(RoutesNames.Auth);
  }

  //TODO Auth Guard
}
