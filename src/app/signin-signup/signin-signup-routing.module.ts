import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientForgotpasswordComponent } from './client-forgotpassword/client-forgotpassword.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MaidForgotpasswordComponent } from './maid-forgotpassword/maid-forgotpassword.component';
import { MaidLoginComponent } from './maid-login/maid-login.component';
import { MaidRegisterComponent } from './maid-register/maid-register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendclientEmailComponent } from './sendclient-email/sendclient-email.component';
import { SendmaidEmailComponent } from './sendmaid-email/sendmaid-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client-login', component: ClientLoginComponent },
  { path: 'client-register', component: ClientRegisterComponent },
  { path: 'maid-login', component: MaidLoginComponent },
  { path: 'maid-register', component: MaidRegisterComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'forgotpassword/:email', component: ForgotpasswordComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'sendmaid-email', component: SendmaidEmailComponent },
  { path: 'sendclient-email', component: SendclientEmailComponent },
  { path: 'maid-forgotpassword/:email', component: MaidForgotpasswordComponent },
  { path: 'client-forgotpassword/:email', component: ClientForgotpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninSignupRoutingModule { }
