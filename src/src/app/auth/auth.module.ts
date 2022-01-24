import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from '../main.routes';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: RoutesNames.Register,
    component: SignUpComponent,
  },
  {
    path: RoutesNames.ForgotPassword,
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent],
  providers: [AuthService],
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
