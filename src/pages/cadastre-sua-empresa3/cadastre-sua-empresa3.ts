import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastreSuaEmpresa4Page } from '../cadastre-sua-empresa4/cadastre-sua-empresa4';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-cadastre-sua-empresa3',
  templateUrl: 'cadastre-sua-empresa3.html'
})
export class CadastreSuaEmpresa3Page {

  constructor(public navCtrl: NavController) {
  }
  goToCadastreSuaEmpresa4(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSuaEmpresa4Page);
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
