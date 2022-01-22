import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'soul-input',
  templateUrl: './soul-input.component.html',
  styleUrls: ['./soul-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SoulInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() secondLabel: string = '';
  @Input() isPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
