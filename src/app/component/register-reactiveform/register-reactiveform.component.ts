import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactiveform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-reactiveform.component.html',
  styleUrl: './register-reactiveform.component.scss'
})
export class RegisterReactiveformComponent {
  public registerForm!: FormGroup;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      // Apply built-in required validator and our custom password strength validator
      password: ['', [Validators.required, this.passwordStrengthValidator()]]
    });
  }

  // Custom Validator Function
  public passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null; // If the field is empty, let 'required' validator handle it
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasValidLength = value.length >= 8;

      const passwordValid = hasUpperCase && hasNumber && hasValidLength;

      // Return an error object if invalid, or null if validation passes
      return !passwordValid ? { 
        passwordStrength: {
          missingUpperCase: !hasUpperCase,
          missingNumber: !hasNumber,
          invalidLength: !hasValidLength
        } 
      } : null;
    };
  }

  // Convenience getter for easy access to form fields in the HTML template
  get f() { 
    return this.registerForm.controls; 
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('Registration Successful!', this.registerForm.value);
  }
}
