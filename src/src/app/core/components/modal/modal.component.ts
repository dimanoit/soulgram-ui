import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation,} from '@angular/core';
import {SoulButtonType} from '../soul-button/soul-button-type.enum';

@Component({
  selector: 'soul-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  @Input() title: string = 'New post';
  @Input() draft: string = 'Save as draft';
  @Input() save: string = 'Publish';

  @Output() onSaveClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDraftClick: EventEmitter<void> = new EventEmitter<void>();

  soulButtonType = SoulButtonType;

  onSave(): void {
    this.onSaveClick.emit();
  }

  onDraft(): void {
    this.onDraftClick.emit();
  }
}
