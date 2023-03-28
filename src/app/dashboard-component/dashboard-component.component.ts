import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {
  public isMobileLayout = true;
  isVisible = false;
  constructor(private authService: AuthService, private router: Router) { }
  
  
  showModal(): void {
    this.isVisible = true;
  }

  
  visible = false;
  drawerVisible = false;

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth >= 750;

  }

  onLogout() {
    this.authService.logout();
    console.log('sdcbhkx,');
    
    this.router.navigate(['/login']);
  }

}
