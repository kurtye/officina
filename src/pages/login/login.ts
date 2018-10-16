import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';
import { NovoCadastroPage } from '../novo-cadastro/novo-cadastro';
import { NovoCadastro2Page } from '../novo-cadastro2/novo-cadastro2';
import { TabsControllerPage } from "../tabs-controller/tabs-controller";
import { LoginEmailPage } from "../login-email/login-email";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToOfficina(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }goToOfficinaDetalhes(params){
    if (!params) params = {};
    this.navCtrl.push(OfficinaDetalhesPage);
  }goToAgendamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AgendamentosPage);
  }goToLoginEmail(params){
    if (!params) params = {};
    this.navCtrl.push(LoginEmailPage);
  }goToNovoCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(NovoCadastroPage);
  }
}
