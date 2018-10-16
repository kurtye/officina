import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { OfficinaPage } from '../officina/officina';
import { OfficinaDetalhesPage } from '../officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../agendamentos/agendamentos';
import {TabsControllerPage} from "../tabs-controller/tabs-controller";
import {UsoTermoPage} from "../uso-termo/uso-termo";

@Component({
  selector: 'page-novo-cadastro2',
  templateUrl: 'novo-cadastro2.html'
})
export class NovoCadastro2Page {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  termoModal(){
    let termo = this.modalCtrl.create(UsoTermoPage);
    termo.present();

  }

  goToOfficina(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }

}
