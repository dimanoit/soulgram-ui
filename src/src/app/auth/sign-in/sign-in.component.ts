import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoulColors } from 'src/app/core/soul-colors';
import { UserLoginInfo } from '../models/user-login-info';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'soul-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent {
  colors = SoulColors;

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.authService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe((object: UserLoginInfo) => {
        console.log(object);
      });
  }
}
