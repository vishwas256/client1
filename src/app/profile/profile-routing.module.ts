import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: 'display-profile/:id',
    component: DisplayProfileComponent,
  },

  {
    path: 'display-profiles',
    component: DisplayProfilesComponent,
  },

  {
    path: 'add-exp',
    component: AddExpComponent,
  },
  {
    path: 'add-edu',
    component: AddEduComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
