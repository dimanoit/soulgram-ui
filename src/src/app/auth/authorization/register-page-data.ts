import {SoulInputParams} from 'src/app/core/components/soul-input/soul-input.params.model';
import {AuthPageData} from '../models/auth-page-data';

export const registerPageData: AuthPageData = {
  title: 'Sing up',
  buttonText: 'Create account',
  helpText: 'Do you have an account already?',
  link: 'Sign in',
} as AuthPageData;

export const repeatPasswordInputParams: SoulInputParams = {
  label: 'Repeat password',
  hint: 'Use 8 or more characters with a mix of letters, numbers & symbols',
} as SoulInputParams;
