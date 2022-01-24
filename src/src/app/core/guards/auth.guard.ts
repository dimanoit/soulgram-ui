import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoutesNames } from 'src/app/main.routes';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (this.localStorageService.getToken()) {
      return true;
    }

    this.router.navigateByUrl(RoutesNames.Login);
    return false;
  }
}
