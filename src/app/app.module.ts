import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';


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
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatSelectModule,
    MatCardModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
