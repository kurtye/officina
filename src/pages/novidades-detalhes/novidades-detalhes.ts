import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovidadesPage } from '../novidades/novidades';

@Component({
  selector: 'page-novidades-detalhes',
  templateUrl: 'novidades-detalhes.html'
})
export class NovidadesDetalhesPage {

  constructor(public navCtrl: NavController) {
  }
  goToNovidades(params){
    if (!params) params = {};
    this.navCtrl.push(NovidadesPage);
  }goToNovidadesDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(NovidadesDetalhesPage);
  }
}
