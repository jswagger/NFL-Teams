import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TeamListComponent } from './team-list/team-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public sidebarOpen: boolean;
  public teamsList: Array<any>;
  public divisionsList: Array<any>;
  public profileOpen: boolean;
  public divisionOpen: boolean;
  public selectedTeam: SelectionObject;
  public selectedTeamObject: any;
  public selectedDivision: SelectionObject;
  public teamProfile: TeamProfileComponent;
  public currentTeam: any;
  public carouselOne: NgxCarousel;
  public startView: boolean;
  public teamsListView: boolean;
  
  constructor() {
  }
  
  ngOnInit(){
    this.title = '32 Teams';
    this.teamsList = this.getTeamsList();
    this.divisionsList = this.getDivisionsList();
    this.selectedTeamObject = {};
    this.carouselOne = this.startCarousel();
    this.startingView();
  };

  public startingView(){
    this.sidebarOpen = false;
    this.startView = true;
    this.teamsListView = false;
  }
  
  public openTeamsList(){
    this.startView = false;
    this.teamsListView = true;
    this.sidebarOpen = false;
  }
  
  public toggleSidebar() {
    if (this.sidebarOpen == false){
      this.sidebarOpen = true;
      return;
    };
    if (this.sidebarOpen == true){
      this.sidebarOpen = false;
    };
  };

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
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
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
