import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  sidebarOpen: string;

  constructor() {
  }
  ngOnInit(){
    this.title = '32 Teams';
    this.sidebarOpen = "inline-block";

  };
  public toggleSidebar() {
    if (this.sidebarOpen = "false"){
      this.sidebarOpen = "true";
    };
    if (this.sidebarOpen = "true"){
      this.sidebarOpen = "false";
    };
  };
}
