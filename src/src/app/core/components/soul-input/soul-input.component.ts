import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  @Input() link: string = '';
  @Input() hint: string = '';
  @Input() icon: string = '';

  @Input() set isPassword(value: boolean) {
    this._isPassword = value;
    this.inputType = value ? 'password' : 'text';
  }

  @Output() onEnterText: EventEmitter<HTMLInputElement> =
    new EventEmitter<HTMLInputElement>();

  _isPassword: boolean = false;
  value: string = '';
  passwordIcon: string = 'visibility_off';
  inputType = 'text';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onTextChange(target: EventTarget | null): void {
    if (target === null) {
      return;
    }
    const tempValue = (target as HTMLInputElement).value;
    this.writeValue(tempValue);
    this.onChange(this.value);
  }

  onEnter(target: EventTarget | null) {
    const htmlInput = target as HTMLInputElement;
    this.onEnterText.emit(htmlInput);
  }

  changeIcon(): void {
    if (this.passwordIcon === 'visibility') {
      this.inputType = 'password';
      this.passwordIcon = 'visibility_off';
    } else {
      this.inputType = 'text';
      this.passwordIcon = 'visibility';
    }
  }

  //#region ControlValueAccessor members
  onTouched = () => {};
  onChange = (value: string) => {
    value;
  };

  writeValue(inputValue: string): void {
    this.value = inputValue;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  //#endregion
}
