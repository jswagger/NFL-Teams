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
  public profileOpen: boolean;
  public selectedTeam: SelectionObject;

  constructor() {
  }
  ngOnInit(){
    this.title = '32 Teams';
    this.sidebarOpen = "inline-block";
    this.teamsList = this.getTeamsList();

  };
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
      },
    ]
  }

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
   this.profileOpen = true;
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