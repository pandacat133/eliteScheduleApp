import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from "../teams/teams";
import { EliteApiService } from "../../shared/elite-api.service";

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tournaments: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApiService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    this.eliteApi.getTournaments().subscribe(data => {
      console.log(data);
      this.tournaments = data;
    });
  }

  goToTeam() {
    this.navCtrl.push(TeamsPage);
  }
}
