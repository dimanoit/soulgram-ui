import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SoulInputParams } from './soul-input.params.model';

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
  @Input() params: SoulInputParams = {} as SoulInputParams;

  @Input() set isPassword(value: boolean) {
    this.inputType = value ? 'password' : 'text';
  }

  @Input() set isDisabled(value: boolean) {
    this._isDisabled = value;
  }

  @Output() enteredText: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();

  private _isDisabled: boolean = false;
  value: string = '';
  passwordIcon: string = 'visibility_off';
  inputType: 'text' | 'password' = 'text';

  isDisabledInput(): boolean {
    return this._isDisabled;
  }

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
    this.enteredText.emit(htmlInput);
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
  onChange = (value: string) => value;

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
