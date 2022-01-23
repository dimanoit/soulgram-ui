import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'soul-input',
  templateUrl: './soul-input.component.html',
  styleUrls: ['./soul-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SoulInputComponent,
    },
  ],
})
export class SoulInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() secondLabel: string = '';
  @Input() isPassword: boolean = false;

  value: string = '';
  onTouched = () => {};
  onChange = (value: string) => {
    value;
  };

  onTextChange(target: EventTarget | null): void {
    if (target === null) {
      return;
    }
    const tempValue = (target as HTMLInputElement).value;
    this.writeValue(tempValue);
    this.onChange(this.value);
  }

  writeValue(inputValue: string): void {
    this.value = inputValue;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
}
