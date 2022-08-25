import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { MaidComponent } from './maid/maid.component';
import { MaidProfileComponent } from './maid/maid-profile/maid-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchFilterPipe } from '../search-filter.pipe';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { RatingModule } from 'primeng/rating';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    BookingComponent,
    ViewBookingComponent,
    MaidComponent,
    MaidProfileComponent,
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
    SearchFilterPipe,
    ResetpasswordComponent,
    AddressComponent,
    AddAddressComponent,
    AddFeedbackComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
