import { Injectable } from '@angular/core';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { from, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthSettings } from '../models/auth-settings';
import { UserLoginInfo } from '../models/user-login-info';

// TODO add refresh token functional, and role management
@Injectable()
export class AuthService {
  logout$: Subject<boolean> = new Subject<boolean>();

  constructor(private oauthService: OAuthService) {
    this.addOptions(environment.identitySettings);
  }

  addOptions(identitySettings: AuthSettings) {
    this.oauthService.tokenEndpoint = identitySettings.tokenEndpoint;
    this.oauthService.oidc = identitySettings.openIdConnect;
    this.oauthService.requireHttps = identitySettings.requireHttps;
    this.oauthService.skipIssuerCheck = identitySettings.skipIssuerCheck;
    this.oauthService.userinfoEndpoint = identitySettings.userInfoEndpoint;
    this.oauthService.clientId = identitySettings.clientId;
    this.oauthService.scope = identitySettings.scope;
    this.oauthService.dummyClientSecret = identitySettings.dummyClientSecret;
    //CODE flow

    this.oauthService.setStorage(identitySettings.tokenStorage);
  }

  //TODO add interceptor to catch http errors
  login(userName: string, password: string): Observable<UserLoginInfo> {
    return from(
      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
        userName,
        password
      ) as Promise<LoginResult>
    ).pipe(map((result: LoginResult) => result.info));
  }
}

interface LoginResult {
  info: UserLoginInfo;
}
