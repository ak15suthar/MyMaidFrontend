import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { DataTablesModule } from 'angular-datatables';
import { SigninSignupModule } from './signin-signup/signin-signup.module';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { RatingModule } from 'primeng/rating';
import { ClientModule } from './client/client.module';
import { MaidModule } from './maid/maid.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ToastModule,
    RatingModule,
    MultiSelectAllModule,
    AdminModule,
    ClientModule,
    MaidModule,
    SigninSignupModule,
    ServiceModule,
    HttpClientModule,
    DataTablesModule
  ],
  exports: [
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
