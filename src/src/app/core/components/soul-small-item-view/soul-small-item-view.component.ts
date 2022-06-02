import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'soul-small-item-view',
  templateUrl: './soul-small-item-view.component.html',
  styleUrls: ['./soul-small-item-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulSmallItemViewComponent {
  @Input() label: string = '';
  @Input() imgUrl: string = '';
}
