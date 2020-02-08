import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-custom-user-form',
  templateUrl: './custom-user-form.component.html',
  styleUrls: ['./custom-user-form.component.scss']
})
export class CustomUserFormComponent implements OnInit {
  customUserForm: FormGroup;
  required: boolean;
  emailError: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customUserForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit() {
    Object.keys(this.customUserForm.controls).forEach(key => {
      this.required = this.customUserForm.controls[key].hasError('required');
    });
  }

  resetForm() {
    this.customUserForm.reset();
    this.required = false;
  }
}
