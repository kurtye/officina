import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarPage } from '../buscar/buscar';
import { MeuPerfilPage } from '../meu-perfil/meu-perfil';
import { CadastrarVeiculosPage } from '../cadastrar-veiculos/cadastrar-veiculos';
import { ServicosPage } from '../servicos/servicos';
import { NovidadesPage } from '../novidades/novidades';
import { OfficinaPage } from '../officina/officina';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = OfficinaPage;
  tab3Root: any = ServicosPage;
  tab2Root: any = NovidadesPage;
  tab4Root: any = BuscarPage;
  tab5Root: any = MeuPerfilPage;
  constructor(public navCtrl: NavController) {
  }
  goToBuscar(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarPage);
  }goToMeuPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(MeuPerfilPage);
  }goToCadastrarVeiculos(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarVeiculosPage);
  }
}
