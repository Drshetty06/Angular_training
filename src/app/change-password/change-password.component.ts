import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../token-storage.service';
import { ChangePasswordService } from '../change-password.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  isResettingPassword = false;
  isVisible = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private tokenStorageService: TokenStorageService, private changePasswordService: ChangePasswordService

  ) {
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
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


    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
    const email = this.tokenStorageService.getUser().email;
    this.changePasswordService.resetPassword(email, currentPassword, newPassword, confirmPassword)

      .then((success: any) => {
        this.isResettingPassword = false;

        if (success) {
          console.log('password');
          this.showModal();

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
