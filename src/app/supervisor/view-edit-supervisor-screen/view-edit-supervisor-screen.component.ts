import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { TokenStorageService } from 'src/app/token-storage.service';
@Component({
  selector: 'app-view-edit-supervisor-screen',
  templateUrl: './view-edit-supervisor-screen.component.html',
  styleUrls: ['./view-edit-supervisor-screen.component.scss']
})
export class ViewEditSupervisorScreenComponent implements OnInit {
  formEditable  = false;
  isDotted: boolean = true;
  buttonText: string = 'Edit';
  button2Text: string = 'Back';
  showCancel: boolean = false;
  showSave: boolean = false;
  showBack: boolean = false;
  backButtonName: string = "Back";
  opacityValue = 0.5;
  cardId: any;
  cardData: any;
  radioValue = 'A';
  radioValue2 = 'A';
  products: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cardId = params.cardId;
      console.log(this.cardId);
    });
     
    const token = this.tokenStorageService.getToken(); // get the token
    if (token) {
      this.dataService.getData(token).subscribe((data: any) => {
        this.products = data;
        this.cardData = this.products.find((element: any) => element.id === this.cardId);
        console.log(this.cardData);
      });
    } else {
      console.error('Token is null'); // handle the case when token is null
    }
  }
  

  get primEmail() {
    return this.formdetails.get('primaryEmail');
  }

  namePattern = /^[A-Za-z-' ]+$/;
  formdetails = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ])
  });

  addDotted() {
    this.isDotted = false;
  }

  changeButtonText() {
    this.buttonText = 'Save';
    this.button2Text = 'Cancel';
  }

  increaseOpacity() {
    this.opacityValue = 1; 
  }

  edit() {
    this.increaseOpacity(); 
    this.addDotted();
    this.showCancel = true;
    this.showSave = true;
    this.backButtonName = "Cancel";
  }

  back() {
    this.router.navigate(['/page1']);
  }

  cancel() {
    this.opacityValue = 0.5;
    this.showCancel = false;
    this.showSave = false;
    this.backButtonName = "Back";
    this.isDotted = true;
  }

  save() {
    this.router.navigate(['/page1']);
  }


}
