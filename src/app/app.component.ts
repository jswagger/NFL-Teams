import { Component } from '@angular/core';

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
  public selectedDivision: SelectionObject;
  
  constructor() {
  }
  ngOnInit(){
    this.title = '32 Teams';
    this.sidebarOpen = "inline-block";
    this.teamsList = this.getTeamsList();
    this.divisionsList = this.getDivisionsList();
    
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
    console.log("team selected")
   // this.getTeamInfo(id);
   console.log(this.selectedTeam.name);
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

  


  private getTeamInfo(id) {
    if (id = "MIN") {
      return {
        "pager": {},
        "data": [
            {
                "branding": {
                    "logos" : [
                        {
                            "href" : "http://path.to/thumb/logo.jpg",
                            "size" : "THUMB"
                        },
                        {
                            "href" : "http://path.to/small/logo.jpg",
                            "size" : "SMALL"
                        },
                        {
                            "href" : "http://path.to/medium/logo.jpg",
                            "size" : "MEDIUM"
                        },
                        {
                            "href" : "http://path.to/mezzanine/logo.jpg",
                            "size" : "MEZZANINE"
                        }
                    ]
                },
                "fullName": "Minnesota Vikings",
                "conference": "NFC",
                "division": "NCN",
                "webDomain": "http://www.vikings.com",
                "established": 1960,
                "venue": {
                    "name":"US Bank Stadium",
                    "ticketPhoneNumber" : "832-667-2390",
                    "ticketUrl" : "http://www.nfl.com/tickets/houston-texans"
                },
                "standings" : {
                    "overallWins":10,
                    "overallLosses":3,
                    "overallTies":0,
                    "divisionRank":1
                }
            }
        ]
     }
    }
  }
}
export class SelectionObject{
  public name: string;
	public value: string;
}