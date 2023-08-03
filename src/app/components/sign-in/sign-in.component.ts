import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PasswordValidator } from 'src/app/validators/password.validator.service';
import { UsernameValidatorService } from 'src/app/validators/username.validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  showPassword = false;

  selectedLanguage = 'English';
  languageList = ['Hindi', 'English', 'French', 'German', 'Portugese'];

  sign_in_details = new FormGroup({
    user_id: new FormControl('', [
      Validators.required,
      UsernameValidatorService.validate(),
    ]),
    password: new FormControl('', [
      Validators.required,
      PasswordValidator.validate(),
    ]),
  });

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    console.log('Sign In');
  }

  temp(temp: string) {
    console.log(temp);
  }
}
