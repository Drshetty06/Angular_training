import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { OtpLoginComponent } from './new-login-component/otp-login/otp-login.component';
import { NzCardModule,  } from 'ng-zorro-antd/card';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewLoginComponentComponent } from './new-login-component/new-login-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { IconModule } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AddSupervisorScreenComponent } from './add-superviser-screen/add-superviser-screen.component';
import { PhoneNumberDirective } from './phone-number.directive';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { CountdownModule } from 'ngx-countdown';

import { NgOtpInputModule  } from 'ng-otp-input';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TokenInterceptor } from './token.interceptor';

registerLocaleData(en);
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OtpLoginComponent,
    ChangePasswordComponent,
    NewLoginComponentComponent,
    DashboardComponentComponent,
    AddSupervisorScreenComponent,
    PhoneNumberDirective,
    TermsAndConditionsComponent,
    ResetPasswordComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    NgxOtpInputModule,
    CountdownModule,
    NgOtpInputModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
