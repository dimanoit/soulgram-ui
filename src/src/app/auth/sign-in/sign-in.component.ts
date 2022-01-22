import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SoulColors } from 'src/app/core/soul-colors';

@Component({
  selector: 'soul-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit {
  constructor() {}
  colors = SoulColors;
  ngOnInit(): void {}
}
