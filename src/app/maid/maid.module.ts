import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaidRoutingModule } from './maid-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ProfileComponent,
    EditprofileComponent,
    BookingsComponent,
    NavbarComponent,
    DashboardComponent,
    ResetpasswordComponent,
    CategoryComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    MaidRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class MaidModule { }
