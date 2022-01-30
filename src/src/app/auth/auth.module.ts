import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from '../main.routes';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SoulHttpClient } from '../shared/services/soul-http-client.service';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
  },
  {
    path: RoutesNames.ForgotPassword,
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [AuthorizationComponent, ForgotPasswordComponent],
  providers: [AuthService, SoulHttpClient],
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
