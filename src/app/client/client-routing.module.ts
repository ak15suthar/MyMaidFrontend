import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { MaidProfileComponent } from './maid/maid-profile/maid-profile.component';
import { MaidComponent } from './maid/maid.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

const routes: Routes = [
  { path: 'client-profile', component: ProfileComponent },
  { path: 'client-editprofile', component: EditProfileComponent },
  { path: 'maids', component: MaidComponent },
  { path: 'maid-profile/:maid_id', component: MaidProfileComponent },
  { path: 'booking/:maid_id', component: BookingComponent },
  { path: 'view-booking', component: ViewBookingComponent },
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'client-resetpassword', component: ResetpasswordComponent },
  { path: 'address', component: AddressComponent },
  { path: 'add-address', component: AddAddressComponent },
  {path:'edit-address/:address_id', component:AddAddressComponent},
  { path: 'feedback/:maid_id', component: AddFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
