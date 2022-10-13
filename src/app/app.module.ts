import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDataComponent } from './add-data/add-data.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddDataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDataComponent
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
