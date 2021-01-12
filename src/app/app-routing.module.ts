import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '**',
    component: SidebarComponent,
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'favorites',
    component: UsersComponent,
  },
  {
    path: 'users',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
