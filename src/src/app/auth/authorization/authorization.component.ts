import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';
import { SoulColors } from 'src/app/core/soul-colors';
import { RoutesNames } from 'src/app/main.routes';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthPageData } from '../models/auth-page-data';
import { SignInModel } from '../models/sign-in.model';
import { SignUpModel } from '../models/sign-up.model';
import { AuthService } from '../services/auth.service';
import {
  loginInputParams,
  loginPageData,
  passwordInputParams,
} from './login-page-data';
import {
  registerPageData,
  repeatPasswordInputParams,
} from './register-page-data';

@UntilDestroy()
@Component({
  selector: 'soul-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthorizationComponent {
  pageData: AuthPageData = loginPageData;
  currentState: 'Login' | 'Register' = 'Login';

  colors = SoulColors;
  loginInputParams: SoulInputParams = loginInputParams;
  passwordInputParams: SoulInputParams = passwordInputParams;
  rePasswordInputParams: SoulInputParams = repeatPasswordInputParams;
  formPadding: '108px 64px' | '64px 64px' = '108px 64px';

  get controls(): { [key: string]: AbstractControl } {
    return this.pageData.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    loginPageData.form = this.getLoginForm();
    registerPageData.form = this.getRegisterForm();
  }

  switchState(): void {
    if (this.currentState === 'Login') {
      return this.switchToRegister();
    }

    this.switchToLogin();
  }

  onSubmit(): void {
    if (this.currentState === 'Login') {
      return this.login(
        this.controls['login'].value as string,
        this.controls['password'].value as string
      );
    }

    this.register();
  }

  private switchToRegister(): void {
    this.currentState = 'Register';
    this.formPadding = '64px 64px';
    this.pageData = registerPageData;
    this.pageData.form.controls['login'].setValue(
      loginPageData.form.controls['login'].value
    );
    this.pageData.form.controls['password'].setValue(
      loginPageData.form.controls['password'].value
    );
  }

  private switchToLogin(): void {
    this.currentState = 'Login';
    this.formPadding = '108px 64px';
    this.pageData = loginPageData;
    this.pageData.form.controls['login'].setValue(
      registerPageData.form.controls['login'].value
    );
    this.pageData.form.controls['password'].setValue(
      registerPageData.form.controls['password'].value
    );
  }

  private getLoginForm(): FormGroup {
    return this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private getRegisterForm(): FormGroup {
    return this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
    });
  }

  private login(login: string, password: string): void {
    const signInModel: SignInModel = {
      login,
      password,
    };

    // TODO delete after backend deployment
    if (login == 'Anna') {
      this.localStorage.setTestToken();
      this.router.navigateByUrl(RoutesNames.Posts);
      return;
    }

    this.authService
      .login(signInModel)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigateByUrl(RoutesNames.Posts));
  }

  private register(): void {
    const signUpModel: SignUpModel = {
      email: this.controls['login'].value as string,
      password: this.controls['password'].value as string,
      confirmPassword: this.controls['rePassword'].value as string,
    };

    this.authService
      .register(signUpModel)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.login(signUpModel.email, signUpModel.password));
  }
}
