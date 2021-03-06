import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SoulButtonType } from '../core/components/soul-button/soul-button-type.enum';

@Component({
  selector: 'soul-ui-kit-samples',
  templateUrl: './ui-kit-samples.component.html',
  styleUrls: ['./ui-kit-samples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiKitSamplesComponent {
  soulButtonType = SoulButtonType;
}
