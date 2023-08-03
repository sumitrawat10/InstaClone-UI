import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;

      if (!password) return null;

      // Password must be at least 8 characters long
      if (password.length < 8) return { minlength: true };

      // Password must contain at least one uppercase letter
      if (!/[A-Z]/.test(password)) return { uppercase: true };

      // Password must contain at least one lowercase letter
      if (!/[a-z]/.test(password)) return { lowercase: true };

      // Password must contain at least one numeric digit
      if (!/\d/.test(password)) return { numeric: true };

      // Password must contain at least one special character
      if (!/[!@#$%^&*]/.test(password)) return { special: true };

      return null;
    };
  }
}
