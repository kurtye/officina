import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CadastreSuaEmpresaPage } from '../pages/cadastre-sua-empresa/cadastre-sua-empresa';
import { CadastreSuaEmpresaJuridicaPage } from '../pages/cadastre-sua-empresa-juridica/cadastre-sua-empresa-juridica';
import { CadastreSuaEmpresa2Page } from '../pages/cadastre-sua-empresa2/cadastre-sua-empresa2';
import { CadastreSuaEmpresa3Page } from '../pages/cadastre-sua-empresa3/cadastre-sua-empresa3';
import { CadastreSuaEmpresa4Page } from '../pages/cadastre-sua-empresa4/cadastre-sua-empresa4';
import { OfficinaPage } from '../pages/officina/officina';
import { OfficinaDetalhesPage } from '../pages/officina-detalhes/officina-detalhes';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { IndiquePage } from '../pages/indique/indique';
import { OfficinaGassOffPage } from '../pages/officina-gass-off/officina-gass-off';
import { OfficinaGassOff2Page } from '../pages/officina-gass-off2/officina-gass-off2';
import { MeusVeiculosPage } from '../pages/meus-veiculos/meus-veiculos';
import { ServicosPage } from '../pages/servicos/servicos';
import { Socorro24hrsPage } from '../pages/socorro24hrs/socorro24hrs';
import { TelefoneUteisPage } from '../pages/telefone-uteis/telefone-uteis';
import { SobreOAppPage } from '../pages/sobre-oapp/sobre-oapp';
import { ShopCarPage } from '../pages/shop-car/shop-car';
import { MeuSaldoPage } from '../pages/meu-saldo/meu-saldo';
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { SplashPage } from "../pages/splash/splash";

import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide(); FAKE SPLASH SCREEN

      let splash = modalCtrl.create(SplashPage);
      splash.present();

      let logado = false;
      if(logado == false){
        this.navCtrl.push(LoginPage)
      }
    });
  }
  goToCadastreSuaEmpresa(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastreSuaEmpresaPage);
  }goToCadastreSuaEmpresaJuridica(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastreSuaEmpresaJuridicaPage);
  }goToCadastreSuaEmpresa2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastreSuaEmpresa2Page);
  }goToCadastreSuaEmpresa3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastreSuaEmpresa3Page);
  }goToCadastreSuaEmpresa4(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastreSuaEmpresa4Page);
  }goToOfficina(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfficinaPage);
  }goToOfficinaDetalhes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfficinaDetalhesPage);
  }goToAgendamentos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgendamentosPage);
  }goToFaleConosco(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FaleConoscoPage);
  }goToFavoritos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FavoritosPage);
  }goToIndique(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IndiquePage);
  }goToOfficinaGassOff(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfficinaGassOffPage);
  }goToOfficinaGassOff2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfficinaGassOff2Page);
  }goToMeusVeiculos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MeusVeiculosPage);
  }goToServicos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ServicosPage);
  }goToSocorro24hrs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Socorro24hrsPage);
  }goToTelefoneUteis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TelefoneUteisPage);
  }goToSobreOApp(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobreOAppPage);
  }goToShopCar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ShopCarPage);
  }goToMeuSaldo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MeuSaldoPage);
  }
}
