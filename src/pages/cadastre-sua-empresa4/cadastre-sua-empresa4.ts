import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-cadastre-sua-empresa4',
  templateUrl: 'cadastre-sua-empresa4.html'
})
export class CadastreSuaEmpresa4Page {

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
