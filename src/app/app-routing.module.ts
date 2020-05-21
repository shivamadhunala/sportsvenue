import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindvenueComponent } from './findvenue/findvenue.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { PaticularComponent } from './paticular/paticular.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'findvenues', component: FindvenueComponent},
  {path: 'findvenues/:location/:sporttype', component: DisplayComponent},
  {path: 'findvenues/:location/:sporttype/:id', component: PaticularComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/signup', component: SignupComponent},
  {path: 'users/resetpassword', component: PasswordComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
