import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';

/**
 * Generated class for the Calendar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar2',
  templateUrl: 'calendar2.html',
})
export class Calendar2Page {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {

  }

  onEvenSelected(event) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar2Page');
  }

}
