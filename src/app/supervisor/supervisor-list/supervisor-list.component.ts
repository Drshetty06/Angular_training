import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-superviser-details',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss']
})
export class SuperviserListComponent implements OnInit {
  products: any;
  searchTerm!: string;

  cards!: any[];
  token: string | null = null;

  constructor(
    private dataService: DataService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}
 

  ngOnInit(): void {
    this.token = this.tokenStorageService.getToken();
    console.log('SuperviserListComponent: retrieved token', this.token);
    if (this.token) {
      this.dataService.getData(this.token).subscribe((data: any) => {
        this.products = data;
      });
    }
  }
  

  editCard(cardId: number) {
    this.router.navigate(['supervisor/view-edit-supervisor'], { queryParams: { cardId } });
  }
}
