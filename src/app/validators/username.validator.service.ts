import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidatorService {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const userName = control.value;

      // TODO: (1) Backend to validate the username
      if (this.validUserName(userName)) return { userNameNotAvailable: true };
      return null;
    };
  }

  // TODO: Remove later after TODO (1)
  private static validUserName(userName: any) {
    userName.toLowerCase();
    const userList = ['admin', 'user', 'super', 'superuser', 'sudo'];
    return userList.indexOf(userName) != -1;
  }
}
