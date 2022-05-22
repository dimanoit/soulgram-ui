import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {SoulInputParams} from '../soul-input/soul-input.params.model';

@Component({
  selector: 'soul-chips',
  templateUrl: './soul-chips.component.html',
  styleUrls: ['./soul-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulChipsComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() maxChips: number = 3;
  @Input() isHashtag: boolean = true;

  @Output() onEditChips: EventEmitter<string[]> = new EventEmitter<string[]>();
  params: SoulInputParams = {} as SoulInputParams;
  chips: string[] = [];

  ngOnInit(): void {
    this.params = {
      placeholder: this.placeholder,
      label: this.label,
    } as SoulInputParams;
  }

  isDisabled(): boolean {
    return this.maxChips === this.chips.length;
  }

  addChip(input: HTMLInputElement): void {
    if (!input.value) {
      return;
    }

    const value = this.isHashtag ? this.toHashtag(input.value) : input.value;

    this.chips.push(value);
    this.onEditChips.emit(this.chips);
    input.value = '';
  }

  deleteChip(idx: number): void {
    this.chips.splice(idx, 1);
    this.onEditChips.emit(this.chips);
  }

  private toHashtag(value: string): string {
    return value[0] === '#' ? value : `#${value}`;
  }
}
