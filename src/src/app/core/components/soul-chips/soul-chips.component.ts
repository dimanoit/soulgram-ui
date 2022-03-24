import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { SoulInputParams } from '../soul-input/soul-input.params.model';

@Component({
  selector: 'soul-chips',
  templateUrl: './soul-chips.component.html',
  styleUrls: ['./soul-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulChipsComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() maxChips: number = 5;

  @Output() onEditChips: EventEmitter<string[]> = new EventEmitter<string[]>();
  params: SoulInputParams = {} as SoulInputParams;
  chips: string[] = [];

  ngOnInit(): void {
    this.params = {
      placeholder: this.placeholder,
      label: this.label,
    } as SoulInputParams;
  }

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
