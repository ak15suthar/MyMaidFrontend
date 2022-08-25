import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import { SigninSignupRoutingModule } from './signin-signup-routing.module';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminModule } from '../admin/admin.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientLoginComponent } from './client-login/client-login.component';
import { MaidLoginComponent } from './maid-login/maid-login.component';
import { MaidRegisterComponent } from './maid-register/maid-register.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendmaidEmailComponent } from './sendmaid-email/sendmaid-email.component';
import { MaidForgotpasswordComponent } from './maid-forgotpassword/maid-forgotpassword.component';
import { SendclientEmailComponent } from './sendclient-email/sendclient-email.component';
import { ClientForgotpasswordComponent } from './client-forgotpassword/client-forgotpassword.component';
import { AppModule } from '../app.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    ClientLoginComponent,
    MaidLoginComponent,
    MaidRegisterComponent,
    ClientRegisterComponent,
    SendEmailComponent,
    SendmaidEmailComponent,
    MaidForgotpasswordComponent,
    SendclientEmailComponent,
    ClientForgotpasswordComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    SigninSignupRoutingModule,
    ToastModule
  ],providers:[MessageService ]
})
export class SigninSignupModule { }
