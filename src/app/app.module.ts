import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileComponent } from '../profile-component/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
    ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatSelectModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
