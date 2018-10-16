import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovidadesDetalhesPage } from '../novidades-detalhes/novidades-detalhes';

@Component({
  selector: 'page-novidades',
  templateUrl: 'novidades.html'
})
export class NovidadesPage {

  constructor(public navCtrl: NavController) {
  }
  goToNovidadesDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(NovidadesDetalhesPage);
  }goToNovidades(params){
    if (!params) params = {};
    this.navCtrl.push(NovidadesPage);
  }
}
