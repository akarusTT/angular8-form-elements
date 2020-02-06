import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss']
})
export class CustomTextareaComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() required: boolean;

  value: any = '';

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

  /** Write form value to the DOM element (model => view) */
  writeValue(value: any): void {
    this.value = value;
  }

  /** Write form disabled state to the DOM element (model => view) */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Write form maxlength to the DOM element (model => view) */
  setRequiredState(isRequired: boolean): void {
    this.required = isRequired;
  }

  /** Update form when DOM element value changes (view => model) */
  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /** Update form when DOM element is blurred (view => model) */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  private onChange() {}
  private onTouched() {}
}
