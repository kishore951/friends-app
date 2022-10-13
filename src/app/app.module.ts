import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDataComponent } from './add-data/add-data.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewFriendsDataComponent } from './view-friends-data/view-friends-data.component';

const appRoutes:Routes=[
  {
    path:"",component:AddDataComponent
  },
  {
    path:"search",component:ViewFriendsDataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDataComponent,
    ViewFriendsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
