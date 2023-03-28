import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@ant-design/icons-angular';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpClientModule } from '@angular/common/http';
import {SuperviserListComponent} from './supervisor-list/supervisor-list.component'
import {ViewEditSupervisorScreenComponent} from './view-edit-supervisor-screen/view-edit-supervisor-screen.component'
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'supervisor-list-screen',
    component: SuperviserListComponent
  },
  {
    path: 'view-edit-supervisor',
    component: ViewEditSupervisorScreenComponent
  }

]
@NgModule({
  declarations: [SuperviserListComponent,ViewEditSupervisorScreenComponent],
  imports: [
    RouterModule.forChild(routes),
 
    FormsModule,
    HttpClientModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCardModule,
    IconModule,
    NzIconModule,
    NzDrawerModule,
    NzLayoutModule,
    NzRadioModule,
    NzModalModule,
    CommonModule,
  ],
  exports: [RouterModule]
})
export default class SupervisorModule { }
