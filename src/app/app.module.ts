import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-form-elements/custom-input/custom-input.component';
import { CustomTextareaComponent } from './custom-form-elements/custom-textarea/custom-textarea.component';
import { CustomRadioButtonComponent } from './custom-form-elements/custom-radio-button/custom-radio-button.component';
import { CustomCheckboxComponent } from './custom-form-elements/custom-checkbox/custom-checkbox.component';
import { CustomUserFormComponent } from './custom-forms/custom-user-form/custom-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomRadioButtonComponent,
    CustomCheckboxComponent,
    CustomUserFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
