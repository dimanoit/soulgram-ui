import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'soul-img-text',
  templateUrl: './soul-img-text.component.html',
  styleUrls: ['./soul-img-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulImgTextComponent {
  @Input() imgUrl: string = '';
  @Input() label: string = '';
}
