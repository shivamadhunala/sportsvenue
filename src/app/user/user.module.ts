import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [UserprofileComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
