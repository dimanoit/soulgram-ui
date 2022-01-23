import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoulColors } from 'src/app/core/soul-colors';
import { emailValidator } from 'src/app/shared/validators/validators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'soul-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit {
  colors = SoulColors;
  loginForm: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.loginForm);
    this.authService.login(
      this.loginForm.value.login,
      this.loginForm.value.password,
      false,
      'kek'
    );
  }
}
