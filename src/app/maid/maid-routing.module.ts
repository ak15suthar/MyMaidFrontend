import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaidAuthGuard } from '../maid-auth.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'maid-profile', component: ProfileComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-editprofile', component: EditprofileComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-booking', component: BookingsComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-dashboard', component: DashboardComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-resetpassword', component: ResetpasswordComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-category', component: CategoryComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-addcategory', component: AddCategoryComponent, canActivate: [MaidAuthGuard] },
  { path: 'maid-editmaidcategory/:maid_id/:category_id', component: AddCategoryComponent, canActivate: [MaidAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaidRoutingModule { }
