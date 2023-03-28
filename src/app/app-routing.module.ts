import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NewLoginComponentComponent } from './new-login-component/new-login-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AddSupervisorScreenComponent } from './add-superviser-screen/add-superviser-screen.component';
// import { SuperviserListComponent } from './supervisor-list/supervisor-list.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
// import { ViewEditSupervisorScreenComponent } from './view-edit-supervisor-screen/view-edit-supervisor-screen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'login', component: NewLoginComponentComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard-component', component: DashboardComponentComponent },
  { path: 'new-supervisor-screen', component: AddSupervisorScreenComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },



  {
    path: 'supervisor',
    loadChildren: () => import('./supervisor/supervisor.module').then(m => m.default)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ForgetPasswordComponent, ResetPasswordComponent, TermsAndConditionsComponent, LoginComponentComponent, NewLoginComponentComponent, DashboardComponentComponent, AddSupervisorScreenComponent]

export { ForgetPasswordComponent, LoginComponentComponent, ResetPasswordComponent, TermsAndConditionsComponent, ChangePasswordComponent, NewLoginComponentComponent, DashboardComponentComponent, AddSupervisorScreenComponent };
