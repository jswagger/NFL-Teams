import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatGridListModule, MatSidenavModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';


import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamProfileComponent } from './team-profile/team-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamProfileComponent
    ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
