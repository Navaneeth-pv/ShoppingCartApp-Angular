import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"viewall",
    component:ViewAllProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewAllProductComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
