import {FormGroup} from '@angular/forms';

export interface AuthPageData {
  title: string;
  helpText: string;
  link: string;
  buttonText: string;
  form: FormGroup;
  hint: string;
}
