import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsoTermoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uso-termo',
  templateUrl: 'uso-termo.html',
})
export class UsoTermoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  closeModal() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsoTermoPage');
  }

}
