import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoCadastro2Page } from '../novo-cadastro2/novo-cadastro2';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  selector: 'page-novo-cadastro',
  templateUrl: 'novo-cadastro.html'
})
export class NovoCadastroPage {

  constructor(public navCtrl: NavController) {
  }
  goToNovoCadastro2(params){
    if (!params) params = {};
    this.navCtrl.push(NovoCadastro2Page);
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
