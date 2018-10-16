import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaPage } from '../officina/officina';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-officina-detalhes',
  templateUrl: 'officina-detalhes.html'
})
export class OfficinaDetalhesPage {

  constructor(public navCtrl: NavController) {
  }
  goToOfficina(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaPage);
  }goToOfficinaDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaDetalhesPage);
  }goToAgendamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AgendamentosPage);
  }
}
