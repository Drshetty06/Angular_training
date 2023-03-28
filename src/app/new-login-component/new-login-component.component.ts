import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-new-login-component',
  templateUrl: './new-login-component.component.html',
  styleUrls: ['./new-login-component.component.scss']
})
export class NewLoginComponentComponent implements OnInit {
  public isUserNamePasswordLogin: boolean = true;
  public getJsonValue: any;
  public postJsonValue: any;
  errorMessage: boolean = false;
 

  constructor(private auth: AuthService, private router: Router, private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {
    
  }


 
  public changeTabs(tab: any) {
    if (tab === 'userName') {
      this.isUserNamePasswordLogin = true;
    } else if (tab === 'userOtp') {
      this.isUserNamePasswordLogin = false;
    }
  }
  
  get email() {
    return this.userEmails.get('email');
  }

  get password() {
    return this.userEmails.get('password');
  }

  userEmails = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.userEmails.valid) {
      this.auth.login(this.userEmails.value).subscribe(result => {
        if (result.success) {
          console.log(result.accessToken);
          
          // this.tokenStorageService.saveToken(result.accessToken,  result.userId);

          if (result.userLoggedInWithTemporaryPassword == true) {
            // Save user email in token storage
            const email = this.email?.value;
            if (email) {
              this.tokenStorageService.saveEmail(email);
            }
            this.router.navigate(['/reset-password']);
          } else {
            // Save token and userId in token storage
            const token = result.token;
            const userId = result.userId;
            // this.tokenStorageService.saveToken(token, userId);
            this.router.navigate(['/dashboard-component']);
          }
        }
      }, error => {
        console.log(error, 'gikhmb');
        this.errorMessage = true;
      });
    }
  }
  
}
