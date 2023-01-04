import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { EdituserComponent } from './Components/edituser/edituser.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
;
import { ChartsComponent } from './Components/charts/charts.component';





@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    EdituserComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    UserlistComponent,
    RegisterComponent,
  
    ChartsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
