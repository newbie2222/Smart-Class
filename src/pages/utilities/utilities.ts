import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LightPage } from '../light/light';
import { FanPage } from '../fan/fan';
import { DoorPage } from '../door/door';
import { ProjectorPage } from '../projector/projector';
import { TvPage } from '../tv/tv';


/**
 * Generated class for the UtilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilitiesPage');
  }
  light()
  {
    this.navCtrl.push(LightPage)
  }
  fan()
  {
    this.navCtrl.push(FanPage)
  }
  door()
  {
    this.navCtrl.push(DoorPage)
  }
  projector()
  {
    this.navCtrl.push(ProjectorPage)
  }
  tv()
  {
    this.navCtrl.push(TvPage)
  }

}
