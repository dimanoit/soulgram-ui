import { Injectable } from '@angular/core';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { from, map, Observable, Subject, tap } from 'rxjs';
import { SoulHttpClient } from 'src/app/shared/services/soul-http-client.service';
import { environment, ServerUrls } from 'src/environments/environment';
import { AuthSettings } from '../models/auth-settings';
import { LoginResult } from '../models/login-result.model';
import { SignInModel } from '../models/sign-in.model';
import { SignUpModel } from '../models/sign-up.model';
import { UserLoginInfo } from '../models/user-login-info';

// TODO add refresh token functional, and role management
@Injectable()
export class AuthService {
  logout$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private oauthService: OAuthService,
    private httpClient: SoulHttpClient
  ) {
    this.addOptions(environment.identitySettings);
  }

  //TODO add interceptor to catch http errors
  login(signInModel: SignInModel): Observable<UserLoginInfo> {
    return from(
      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
        signInModel.login,
        signInModel.password
      ) as Promise<LoginResult>
    ).pipe(map((result: LoginResult) => result.info));
  }

  register(signUpModel: SignUpModel): Observable<void> {
    return this.httpClient.post(ServerUrls.Identity, 'account', signUpModel);
  }

  private addOptions(identitySettings: AuthSettings) {
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
}
