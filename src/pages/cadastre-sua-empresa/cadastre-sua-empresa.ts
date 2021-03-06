import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastreSuaEmpresaJuridicaPage } from '../cadastre-sua-empresa-juridica/cadastre-sua-empresa-juridica';
import { CadastreSuaEmpresa2Page } from '../cadastre-sua-empresa2/cadastre-sua-empresa2';
import { CadastreSuaEmpresa3Page } from '../cadastre-sua-empresa3/cadastre-sua-empresa3';
import { CadastreSuaEmpresa4Page } from '../cadastre-sua-empresa4/cadastre-sua-empresa4';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-cadastre-sua-empresa',
  templateUrl: 'cadastre-sua-empresa.html'
})
export class CadastreSuaEmpresaPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastreSuaEmpresaJuridica(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSuaEmpresaJuridicaPage);
  }goToCadastreSuaEmpresa2(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSuaEmpresa2Page);
  }goToCadastreSuaEmpresa3(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSuaEmpresa3Page);
  }goToCadastreSuaEmpresa4(params){
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
