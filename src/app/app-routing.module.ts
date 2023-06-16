import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/authenricate/login/login.component';
import { UserListComponent } from './features/user/list/user-list.component';
import { AddComponent } from './features/user/add/add.component';
import { ConfirmComponent } from './features/user/confirm/confirm.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'listuser', component: UserListComponent },
  { path: 'add', component: AddComponent },
  { path: 'confirm', component: ConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
