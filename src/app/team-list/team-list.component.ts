import { Component, OnInit } from '@angular/core';
import { TeamProfileComponent } from '../team-profile/team-profile.component'
import { AppComponent } from '../app.component'

@Component({
  selector: 'teams-list-wrapper',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public appComponent: AppComponent;
  public teamProfile: TeamProfileComponent;

  constructor() { }

  ngOnInit() {

  }
    public openTeamProfile(team){
    this.teamProfile = new TeamProfileComponent;
    let selectedTeamObject = this.teamProfile.getTeamInfo(team);
    this.appComponent.currentTeam = selectedTeamObject.data[0];
    // this.teamProfile.setTeamData(selectedTeamObject.data[0], this.selectedTeam.value)
    // this.teamProfile.teamData = selectedTeamObject.data[0];
    this.appComponent.startView = false;
    this.appComponent.teamsListView = false;
    this.appComponent.profileOpen = true;
    this.appComponent.divisionOpen = false;
   }

}
