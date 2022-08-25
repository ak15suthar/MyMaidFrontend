import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { BookingComponent } from './booking/booking.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryComponent } from './category/category.component';
import { AddAddressComponent } from './client/add-address/add-address.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ClientComponent } from './client/client.component';
import { ClientprofileComponent } from './client/clientprofile/clientprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { AddMaidComponent } from './maid/add-maid/add-maid.component';
import { MaidComponent } from './maid/maid.component';
import { MaidcategoryComponent } from './maid/maidcategory/maidcategory.component';
import { MaidprofileComponent } from './maid/maidprofile/maidprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'admin-booking', component: BookingComponent, canActivate: [AuthGuard]},
  {path: 'admin-category', component: CategoryComponent, canActivate: [AuthGuard]},
  {path: 'admin-addcategory', component: AddCategoryComponent, canActivate: [AuthGuard]},
  {path: 'admin-editcategory/:category_id', component: AddCategoryComponent, canActivate: [AuthGuard]},
  {path: 'admin-client', component: ClientComponent, canActivate: [AuthGuard]},
  {path: 'admin-addclient', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'admin-editclient/:client_id', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'admin-clientprofile/:client_id', component: ClientprofileComponent, canActivate: [AuthGuard]},
  {path: 'admin-addaddress/:client_id', component: AddAddressComponent, canActivate: [AuthGuard]},
  {path: 'admin-editaddress/:address_id', component: AddAddressComponent, canActivate: [AuthGuard]},
  {path: 'admin-dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin-feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  {path: 'admin-location', component: LocationComponent, canActivate: [AuthGuard]},
  {path: 'admin-addlocation', component: AddLocationComponent, canActivate: [AuthGuard]},
  {path: 'admin-editlocation/:pincode', component: AddLocationComponent, canActivate: [AuthGuard]},
  {path: 'admin-maid', component: MaidComponent, canActivate: [AuthGuard]},
  {path: 'admin-addmaid', component: AddMaidComponent, canActivate: [AuthGuard]},
  {path: 'admin-editmaid/:maid_id', component: AddMaidComponent, canActivate: [AuthGuard]},
  {path: 'admin-maidcategory/:maid_id', component: MaidcategoryComponent, canActivate: [AuthGuard]},
  {path: 'admin-editmaidcategory/:maid_id/:category_id', component: MaidcategoryComponent, canActivate: [AuthGuard]},
  {path: 'admin-maidprofile/:maid_id', component: MaidprofileComponent, canActivate: [AuthGuard]},
  {path: 'admin-profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'admin-editprofile', component: EditprofileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
