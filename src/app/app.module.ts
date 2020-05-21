import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// tslint:disable-next-line: import-spacing
import  {OwnerModule} from './owner/owner.module';
import { UserModule } from './user/user.module';

import { HomeComponent } from './home/home.component';
import { FindvenueComponent } from './findvenue/findvenue.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { SearchService } from './search.service';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports from angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { PaticularComponent } from './paticular/paticular.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { PasswordComponent } from './password/password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindvenueComponent,
    TournamentsComponent,
    LoginComponent,
    SignupComponent,
    DisplayComponent,
    PaticularComponent,
    PasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwnerModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  providers: [ SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
