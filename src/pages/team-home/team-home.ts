import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from "../team-detail/team-detail";
import { StandingsPage } from "../standings/standings";
import { MyTeamsPage } from "../my-teams/my-teams";

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  team = this.navParams;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data.team;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome() {
    this.navCtrl.setRoot(MyTeamsPage);
  }
}
