import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SoulColors } from '../soul-colors';

@Component({
  selector: 'soul-button',
  templateUrl: './soul-button.component.html',
  styleUrls: ['./soul-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulButtonComponent {
  @Input() text: string = '';
  @Input() iconUrl: string = '';
  @Input() textColor: SoulColors = SoulColors.NeutralWhite;
  @Input() background: SoulColors = SoulColors.Primary;
}
