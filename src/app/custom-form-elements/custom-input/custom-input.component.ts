import { Component, forwardRef, OnDestroy, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';
import { Subscription } from 'rxjs';

// describes what the return value of the form control will look like
export interface FormControlValue {
  value: string;
}

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor, OnDestroy {
  @Input() label;
  @Input() required;

  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): FormControlValue {
    return this.form.value;
  }

  set value(value: FormControlValue) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get inputValue() {
    return this.form.controls.value;
  }

  constructor(private formBuilder: FormBuilder) {
    // create the inner form
    this.form = this.formBuilder.group({
      value: ['']
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  // setDisabledState(isDisabled: boolean) {
  //   this.disabled = isDisabled;
  // }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid ? null : { customInput: { valid: false } };
  }
}
