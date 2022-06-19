import { SoulInputParams } from 'src/app/core/components/soul-input/soul-input.params.model';
import { RoutesNames } from 'src/app/main.routes';
import { AuthPageData } from '../models/auth-page-data';

export const loginPageData: AuthPageData = {
  title: 'Sing in',
  buttonText: 'Sign in',
  helpText: "Don't have an account yet?",
  link: 'Sign up',
} as AuthPageData;

export const passwordInputParams: SoulInputParams = {
  label: 'Password',
  secondLabel: 'Forgot your password?',
  link: RoutesNames.ForgotPassword,
} as SoulInputParams;

export const loginInputParams: SoulInputParams = {
  label: 'Login',
  placeholder: 'example@gmail.com',
} as SoulInputParams;
