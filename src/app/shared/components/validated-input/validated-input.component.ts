import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-validated-input',
  templateUrl: './validated-input.component.html',
  styleUrls: ['./validated-input.component.scss'],
})
export class ValidatedInputComponent implements OnInit, ControlValueAccessor {

  @Input() type = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() label = '';

  @Input() value!: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = [
      Validators.min(5),
    ];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.type === 'email') {
      validators.push(Validators.email);
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChange(this.value);
  }

  onChange(change: string): void {
  }

  onTouched(): void {
  }
}
