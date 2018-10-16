import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaGassOff2Page } from '../officina-gass-off2/officina-gass-off2';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-officina-gass-off',
  templateUrl: 'officina-gass-off.html'
})
export class OfficinaGassOffPage {

  constructor(public navCtrl: NavController) {
  }
  goToOfficinaGassOff2(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaGassOff2Page);
  }goToOfficina(params){
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
