import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-user-form',
  templateUrl: './custom-user-form.component.html',
  styleUrls: ['./custom-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomUserFormComponent implements OnInit {
  customUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customUserForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: ['']
    });
  }

  submit() {
    if (this.customUserForm.valid) {
      console.log(this.customUserForm.value);
    }
  }

  resetForm() {
    this.customUserForm.reset();
  }
}
