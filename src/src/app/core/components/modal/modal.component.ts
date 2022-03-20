import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { SoulColors } from '../../soul-colors';

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

  colors = SoulColors;

  onSave(): void {
    this.onSaveClick.emit();
  }

  onDraft(): void {
    this.onDraftClick.emit();
  }
}
