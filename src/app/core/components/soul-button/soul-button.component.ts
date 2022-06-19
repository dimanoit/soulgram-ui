import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SoulButtonType } from './soul-button-type.enum';

@Component({
  selector: 'soul-button',
  templateUrl: './soul-button.component.html',
  styleUrls: ['./soul-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulButtonComponent {
  @Input() text: string = '';
  @Input() iconUrl: string = '';
  @Input() buttonType: SoulButtonType = SoulButtonType.Primary;
  @Input() disabled: boolean | null = false;
}
