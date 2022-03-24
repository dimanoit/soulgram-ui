import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'soul-text-area',
  templateUrl: './soul-text-area.component.html',
  styleUrls: ['./soul-text-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulTextAreaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() maxCount: number = 2000;

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  symbolsCount = 0;
  constructor() {}

  onKeyPress(target: EventTarget | null): void {
    if (target === null) {
      return;
    }

    const value = (target as HTMLTextAreaElement).value;
    this.symbolsCount = value.length;
    this.onChange.emit(value);
  }
}
