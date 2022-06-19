import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RouterModule, Routes} from '@angular/router';
import {RoutesNames} from '../main.routes';
import {CoreModule} from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SoulHttpClient} from '../shared/services/soul-http-client.service';
import {LocalStorageService} from '../shared/services/local-storage.service';
import {GeneralInterestsComponent} from './general-interests/general-interests.component';
import {InterestsService} from '../shared/services/interests.service';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
  },
  {
    path: RoutesNames.GeneralInterests,
    component: GeneralInterestsComponent,
  },
  {
    path: RoutesNames.ForgotPassword,
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [
    AuthorizationComponent,
    ForgotPasswordComponent,
    GeneralInterestsComponent,
  ],
  providers: [
    AuthService,
    SoulHttpClient,
    LocalStorageService,
    InterestsService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    OAuthModule.forRoot(),
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
