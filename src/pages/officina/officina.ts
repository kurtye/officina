import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-officina',
  templateUrl: 'officina.html'
})

export class OfficinaPage {

  constructor(public navCtrl: NavController) {
  }
  goToOfficinaDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaDetalhesPage);
  }goToOfficina(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaPage);
  }goToAgendamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AgendamentosPage);
  }
}
