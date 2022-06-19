import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'soul-add-label',
  templateUrl: './soul-add-label.component.html',
  styleUrls: ['./soul-add-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulAddLabelComponent {
  @Input() name: string = '';
}
