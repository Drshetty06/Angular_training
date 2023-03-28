import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { TokenStorageService } from '../token-storage.service';
@Component({
  selector: 'app-superviser-list-screen',
  templateUrl: './add-superviser-screen.component.html',
  styleUrls: ['./add-superviser-screen.component.scss']
})

export class AddSupervisorScreenComponent implements OnInit {
  formEditable = false;
  radioValue = 'I';
  radioValue2 = 'enabled';
  products: any;
  phonePattern = /^\d{10}$/; 
  constructor(private userService: UserService, private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {};

  get primEmail() {
    return this.formdetails.get('email');
  }
  get phoneNumber() {
    return this.formdetails.get('phoneNumber');
  }
  firstNamePattern = /^[A-Za-z-' ]+$/;
  formdetails = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.phonePattern)
    ])
  });

  addUser() {
    const newUser = {
      firstName: this.formdetails.get('firstName')?.value,
      lastName: this.formdetails.get('lastName')?.value,
      email: this.formdetails.get('email')?.value,
      phoneNumber: this.formdetails.get('phoneNumber')?.value,
      accountType: this.radioValue,
      status: this.radioValue2
    };

    this.http.post('http://localhost:7008/index/createuser', newUser).subscribe(
      (response) => {
       
        console.log(response,'response');
      },
      (error) => {
        // handle error
        console.error(error,'error');
      }
    );
  }

  

}