import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { from, identity, Observable, Subject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout$: Subject<boolean> = new Subject<boolean>();

  constructor(private oauthService: OAuthService) {
    const identitySettings = environment.identitySettings;
    this.oauthService.tokenEndpoint = identitySettings.tokenEndpoint;
    this.oauthService.oidc = false;
    this.oauthService.requireHttps = false;
    this.oauthService.setStorage(localStorage);
    this.oauthService.skipIssuerCheck = true;
    this.oauthService.userinfoEndpoint = identitySettings.userInfoEndpoint;
    this.oauthService.clientId = identitySettings.clientId;
    this.oauthService.scope = 'openid email offline_access posts';
    this.oauthService.dummyClientSecret = 'dummy';

    console.log(identitySettings);
  }

  login(
    userName: string,
    password: string,
    rememberMe: boolean,
    obligatoryRole: string | string[]
  ): any {
    const observable = from(
      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
        userName,
        password
      )
    );

    return observable
      .pipe(
        tap((kek: any) => {
          console.log(kek);
        })
      )
      .subscribe();
  }
}
