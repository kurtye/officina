import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-officina-gass-off2',
  templateUrl: 'officina-gass-off2.html'
})
export class OfficinaGassOff2Page {

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
