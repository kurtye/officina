import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarVeiculosPage } from '../cadastrar-veiculos/cadastrar-veiculos';

@Component({
  selector: 'page-meu-perfil',
  templateUrl: 'meu-perfil.html'
})
export class MeuPerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarVeiculos(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarVeiculosPage);
  }
}
