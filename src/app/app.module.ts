import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ServicosPage } from '../pages/servicos/servicos';
import { NovidadesPage } from '../pages/novidades/novidades';
import { OfficinaPage } from '../pages/officina/officina';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NovoCadastroPage } from '../pages/novo-cadastro/novo-cadastro';
import { NovoCadastro2Page } from '../pages/novo-cadastro2/novo-cadastro2';
import { BuscarPage } from '../pages/buscar/buscar';
import { LoginPage } from '../pages/login/login';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { CadastreSuaEmpresaPage } from '../pages/cadastre-sua-empresa/cadastre-sua-empresa';
import { CadastreSuaEmpresaJuridicaPage } from '../pages/cadastre-sua-empresa-juridica/cadastre-sua-empresa-juridica';
import { CadastreSuaEmpresaFisicaPage } from '../pages/cadastre-sua-empresa-fisica/cadastre-sua-empresa-fisica';
import { CadastreSuaEmpresa2Page } from '../pages/cadastre-sua-empresa2/cadastre-sua-empresa2';
import { CadastreSuaEmpresa3Page } from '../pages/cadastre-sua-empresa3/cadastre-sua-empresa3';
import { CadastreSuaEmpresa4Page } from '../pages/cadastre-sua-empresa4/cadastre-sua-empresa4';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { OfficinaGassOffPage } from '../pages/officina-gass-off/officina-gass-off';
import { OfficinaGassOff2Page } from '../pages/officina-gass-off2/officina-gass-off2';
import { IndiquePage } from '../pages/indique/indique';
import { MeusVeiculosPage } from '../pages/meus-veiculos/meus-veiculos';
import { CadastrarVeiculosPage } from '../pages/cadastrar-veiculos/cadastrar-veiculos';
import { CadastrarVeiculos2Page } from '../pages/cadastrar-veiculos2/cadastrar-veiculos2';
import { CadastrarVeiculos3Page } from '../pages/cadastrar-veiculos3/cadastrar-veiculos3';
import { CadastrarVeiculos4Page } from '../pages/cadastrar-veiculos4/cadastrar-veiculos4';
import { MeuSaldoPage } from '../pages/meu-saldo/meu-saldo';
import { Socorro24hrsPage } from '../pages/socorro24hrs/socorro24hrs';
import { ShopCarPage } from '../pages/shop-car/shop-car';
import { SobreOAppPage } from '../pages/sobre-oapp/sobre-oapp';
import { TelefoneUteisPage } from '../pages/telefone-uteis/telefone-uteis';
import { OfficinaDetalhesPage } from '../pages/officina-detalhes/officina-detalhes';
import { NovidadesDetalhesPage } from '../pages/novidades-detalhes/novidades-detalhes';
import { MeusProdutosPage } from '../pages/meus-produtos/meus-produtos';
import { RecuperarSenhaPage } from '../pages/recuperar-senha/recuperar-senha';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { AgendarPage } from '../pages/agendar/agendar';
import { SplashPage } from '../pages/splash/splash';
import { UsoTermoPage } from "../pages/uso-termo/uso-termo";
import { LoginEmailPage } from "../pages/login-email/login-email";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ServicosPage,
    NovidadesPage,
    OfficinaPage,
    TabsControllerPage,
    NovoCadastroPage,
    NovoCadastro2Page,
    BuscarPage,
    LoginPage,
    FaleConoscoPage,
    AgendamentosPage,
    CadastreSuaEmpresaPage,
    CadastreSuaEmpresaJuridicaPage,
    CadastreSuaEmpresaFisicaPage,
    CadastreSuaEmpresa2Page,
    CadastreSuaEmpresa3Page,
    CadastreSuaEmpresa4Page,
    FavoritosPage,
    OfficinaGassOffPage,
    OfficinaGassOff2Page,
    IndiquePage,
    MeusVeiculosPage,
    CadastrarVeiculosPage,
    CadastrarVeiculos2Page,
    CadastrarVeiculos3Page,
    CadastrarVeiculos4Page,
    MeuSaldoPage,
    Socorro24hrsPage,
    ShopCarPage,
    SobreOAppPage,
    TelefoneUteisPage,
    OfficinaDetalhesPage,
    NovidadesDetalhesPage,
    MeusProdutosPage,
    RecuperarSenhaPage,
    MeuPerfilPage,
    AgendarPage,
    SplashPage,
    UsoTermoPage,
    LoginEmailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicosPage,
    NovidadesPage,
    OfficinaPage,
    TabsControllerPage,
    NovoCadastroPage,
    NovoCadastro2Page,
    BuscarPage,
    LoginPage,
    FaleConoscoPage,
    AgendamentosPage,
    CadastreSuaEmpresaPage,
    CadastreSuaEmpresaJuridicaPage,
    CadastreSuaEmpresaFisicaPage,
    CadastreSuaEmpresa2Page,
    CadastreSuaEmpresa3Page,
    CadastreSuaEmpresa4Page,
    FavoritosPage,
    OfficinaGassOffPage,
    OfficinaGassOff2Page,
    IndiquePage,
    MeusVeiculosPage,
    CadastrarVeiculosPage,
    CadastrarVeiculos2Page,
    CadastrarVeiculos3Page,
    CadastrarVeiculos4Page,
    MeuSaldoPage,
    Socorro24hrsPage,
    ShopCarPage,
    SobreOAppPage,
    TelefoneUteisPage,
    OfficinaDetalhesPage,
    NovidadesDetalhesPage,
    MeusProdutosPage,
    RecuperarSenhaPage,
    MeuPerfilPage,
    AgendarPage,
    SplashPage,
    UsoTermoPage,
    LoginEmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
