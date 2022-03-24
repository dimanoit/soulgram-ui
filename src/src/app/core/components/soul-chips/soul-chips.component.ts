import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { SoulInputParams } from '../soul-input/soul-input.params.model';

@Component({
  selector: 'soul-chips',
  templateUrl: './soul-chips.component.html',
  styleUrls: ['./soul-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulChipsComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() maxChips: number = 5;

  @Output() onEditChips: EventEmitter<string[]> = new EventEmitter<string[]>();

  params: SoulInputParams = {
    placeholder: this.placeholder,
    label: this.label,
  } as SoulInputParams;

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
