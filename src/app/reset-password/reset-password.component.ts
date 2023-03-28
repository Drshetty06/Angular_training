import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../token-storage.service';
import { ResetPasswordService } from '../reset-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  isResettingPassword = false;
  isVisible = false;
  constructor(private formBuilder: FormBuilder, private tokenStorageService: TokenStorageService, private resetPasswordService: ResetPasswordService, private router: Router

  ) {
    this.passwordForm = this.formBuilder.group({
      tempPassword: ['', Validators.required],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator('newPassword', 'confirmPassword')
    });
  }
  ngOnInit(): void {

  }

  passwordMatchValidator(controlName: string, matchingControlName: string) {


    return (formGroup: FormGroup) => {

      console.log('happy');
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.match) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ match: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  get confirmPasswordControl() {
    return this.passwordForm.controls.confirmPassword;
  }

  public isLoggedIn(): boolean {
    const token = this.tokenStorageService.getToken();
    return token !== null;
  }

  public onSubmit() {
    this.isResettingPassword = true;


    const { tempPassword, newPassword, confirmPassword } = this.passwordForm.value;
    const email = this.tokenStorageService.getUser().email;
    this.resetPasswordService.resetPassword(email, tempPassword, newPassword, confirmPassword)

      .then(success => {
        this.isResettingPassword = false;

        if (success) {
  
        this.router.navigate(['/dashboard-component']);
        } else {
          console.log('wrong current password');
          
          alert('There was an error resetting your password.');
        }
      });
  }
  showModal(): void {
    this.isVisible = true;
  }


}
