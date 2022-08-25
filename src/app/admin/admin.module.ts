import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaidComponent } from './maid/maid.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { BookingComponent } from './booking/booking.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddMaidComponent } from './maid/add-maid/add-maid.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DataTablesModule } from 'angular-datatables';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ProfileComponent } from './profile/profile.component';
import { MaidprofileComponent } from './maid/maidprofile/maidprofile.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ClientprofileComponent } from './client/clientprofile/clientprofile.component';
import { AddAddressComponent } from './client/add-address/add-address.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { MaidcategoryComponent } from './maid/maidcategory/maidcategory.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MaidComponent,
    ClientComponent,
    CategoryComponent,
    BookingComponent,
    LocationComponent,
    FeedbackComponent,
    AddMaidComponent,
    AddClientComponent,
    AddCategoryComponent,
    HeaderComponent,
    AddLocationComponent,
    ProfileComponent,
    MaidprofileComponent,
    ClientprofileComponent,
    AddAddressComponent,
    EditprofileComponent,
    MaidcategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AdminModule { }
