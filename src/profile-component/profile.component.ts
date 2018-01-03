import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-container',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public currentLogo: string;
  public currentConf: string;

  @Input()
  public teamData: any;
  
  constructor() {
    this.teamData = {};
    this.currentLogo = "";
    this.currentConf = "";
  }
  ngOnInit(){
  };

  public setTeamData(data: object, id: string){
    this.teamData = data;
    this.currentLogo = "/assets/images/" + id + "_logo.png";
    this.currentConf = "/assets/images/" + this.teamData.conference + "_logo.png";
  }
  public getTeamInfo(id) {
    if (id == "MIN") {
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
                "established": 1961,
                "venue": {
                    "name":"US Bank Stadium",
                    "ticketPhoneNumber" : "832-667-2390",
                    "ticketUrl" : "http://www.nfl.com/tickets/houston-texans"
                },
                "standings" : {
                    "overallWins":11,
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
