import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from "../game/game";

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  //catches the "team" parameter from teams.ts
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data.team;
    console.log('**nav params:', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goToGame() {
    this.navCtrl.push(GamePage);
  }
}
