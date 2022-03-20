import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'soul-chips',
  templateUrl: './soul-chips.component.html',
  styleUrls: ['./soul-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulChipsComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';

  @Output() onEditChips: EventEmitter<string[]> = new EventEmitter<string[]>();

  chips: string[] = [];

  addChip(input: HTMLInputElement): void {
    if (!input.value) {
      return;
    }

    this.chips.push(input.value);
    this.onEditChips.emit(this.chips);
    input.value = '';
  }

  deleteChip(idx: number): void {
    this.chips.splice(idx, 1);
    this.onEditChips.emit(this.chips);
  }
}
