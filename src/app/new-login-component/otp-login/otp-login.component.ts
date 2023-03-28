import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpServiceService } from 'src/app/otp-service.service';
import { OtpVerificationService } from 'src/app/otp-verification.service';
@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.scss'],
})
export class OtpLoginComponent implements OnInit {
  verified!: boolean;
  isUserNamePasswordLogin: boolean = false;
  wrongOtpAttempts: number = 0;
  showDivs = false; 
  loading: boolean = false;

  public isEnterOtp: boolean = true;
  public countDownConfig = {
    leftTime: 180,
    format: 'mm:ss',
  };

  isResendOtpDisabled: boolean = false;
  otpService: any;
  get email() {
    return this.userEmails.get('email');
  }

  userEmails = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  otp: string | undefined;
  showOtpComponent = true;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: true,
    disableAutoFocus: false,
    inputStyles: { width: '50px', height: '50px', 'margin-top': '20px' },
  };

  
  constructor(
    private otpServiceService: OtpServiceService,
    private router: Router,
    private otpVerificationService: OtpVerificationService
  ) {}

  

  sendOtp() {
    const email = this.userEmails.get('email')?.value;
    if (email != null) {
      this.otpServiceService.sendOtp(email).subscribe(
        () => console.log('OTP sent successfully'),
        (error: any) => console.error(error)
      );
    }
  }

  onSubmit() {
    const email = this.email?.value;

    if (email && this.otp) {
      this.otpVerificationService.verifyOtp(email, this.otp).subscribe(
        (response) => {
          this.verified = true;
          console.log(response);
          this.router.navigate(['/dashboard-component']);
        },
        (error) => {
          console.log(error);
          this.wrongOtpAttempts++;
          if (this.wrongOtpAttempts >= 5) {
            // alert('You have exceeded the number of wrong OTP attempts. Please try again later.');
          } else {
            // alert('Wrong OTP entered. Please try again.');
          }
          this.showDivs = true;
        }
      );
     
    }
   
    this.loading = true;
  }

  
  ngOnInit(): void {}
  public handleCoundownEvent(event: { action: string }) {
    if (event.action === 'restart') {
      this.isResendOtpDisabled = true;
    }

    if (event.action === 'done') {
      this.isResendOtpDisabled = false;
    }
  }
  onOtpChange(otp: string | undefined) {
    this.otp = otp;
  }
}
