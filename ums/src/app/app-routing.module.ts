import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AdduserComponent } from './Components/adduser/adduser.component';
import { ChartsComponent } from './Components/charts/charts.component';
import { EdituserComponent } from './Components/edituser/edituser.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserlistComponent } from './Components/userlist/userlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'chart', component: ChartsComponent },
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
