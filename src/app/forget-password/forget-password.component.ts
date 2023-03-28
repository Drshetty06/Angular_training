import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../forget-password.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public isEnterEmail: boolean = true;
 
  get email() {
    return this.userEmails.get('email');
  }

  userEmails = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor(private forgetPasswordService: ForgetPasswordService, private router: Router,   private translateService: TranslateService) { }

  onSubmit() {
    const email = this.email?.value;
    if (email) {
      this.forgetPasswordService.sendTempPassword(email)
        .subscribe(response => {
          console.log('Temporary password sent!');
        }, error => {
          console.error(error);
        });
    }
  }


  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }



}
