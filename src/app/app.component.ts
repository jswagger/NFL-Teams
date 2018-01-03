import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { ProfileComponent } from '../profile-component/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public sidebarOpen: string;
  public teamsList: Array<any>;
  public divisionsList: Array<any>;
  public profileOpen: boolean;
  public divisionOpen: boolean;
  public selectedTeam: SelectionObject;
  public selectedTeamObject: any;
  public selectedDivision: SelectionObject;
  public teamProfile: ProfileComponent;
  public currentTeam: any;
  public carouselOne: NgxCarousel;
  
  constructor() {
  }
  ngOnInit(){
    this.title = '32 Teams';
    this.sidebarOpen = "inline-block";
    this.teamsList = this.getTeamsList();
    this.divisionsList = this.getDivisionsList();
    this.selectedTeamObject = {};
    this.carouselOne = this.startCarousel();
    
  };
  public toggleSidebar() {
    if (this.sidebarOpen = "false"){
      this.sidebarOpen = "true";
    };
    if (this.sidebarOpen = "true"){
      this.sidebarOpen = "false";
    };
  };

  public teamSelectChange(){
   this.teamProfile = new ProfileComponent;
   let selectedTeamObject = this.teamProfile.getTeamInfo(this.selectedTeam.value);
   this.currentTeam = selectedTeamObject.data[0];
   // this.teamProfile.setTeamData(selectedTeamObject.data[0], this.selectedTeam.value)
   // this.teamProfile.teamData = selectedTeamObject.data[0];
   this.profileOpen = true;
   this.divisionOpen = false;
  }
  public divisionSelectChange(){
    console.log("division selected")
   // this.getTeamInfo(id);
   console.log(this.selectedDivision.name);
   this.profileOpen = false;
   this.divisionOpen = true;
  }

  private getTeamsList(){
    return [
      {
        name: "Minnesota Vikings",
        value: "MIN"
      },
      {
        name: "Green Bay Packers",
        value: "GB"
      },
      {
        name: "Detroit Lions",
        value: "DET"
      },
      {
        name: "Chicago Bears",
        value: "CHI"
      }
    ]
  }
  private getDivisionsList(){
    return [
      {
        name: "NFC North",
        value: "NCN"
      },
      {
        name: "NFC South",
        value: "NCS"
      },
      {
        name: "NFC East",
        value: "NCE"
      },
      {
        name: "NFC West",
        value: "NCW"
      },
      {
        name: "AFC North",
        value: "ACN"
      },
      {
        name: "AFC South",
        value: "NCS"
      },
      {
        name: "AFC East",
        value: "ACE"
      },
      {
        name: "AFC West",
        value: "ACW"
      },
    ]
  }

  private startCarousel(): NgxCarousel {
    return {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

}
export class SelectionObject{
  public name: string;
	public value: string;
}