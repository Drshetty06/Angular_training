import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  form: any;
  public isUserNamePasswordLogin: boolean = true;
  user: any;
constructor(private formBuilder: FormBuilder){
  
}
  ngOnInit(): void {}
  public changeTabs(tab: any) {
    if (tab === 'userName') {
      this.isUserNamePasswordLogin = true;
    } else if (tab === 'userOtp') {
      this.isUserNamePasswordLogin = false;
    }
  }
  get primEmail() {
    return this.userEmails.get('primaryEmail');
  }

  get primPassword() {
    return this.userEmails.get('primaryEmail');
  }
  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    primaryPassword: new FormControl('', [Validators.required]),
  });
  public onSubmit() {
    console.log(this.userEmails);
  }
}
