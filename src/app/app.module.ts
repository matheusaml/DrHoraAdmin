import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { CadastroTeamPage } from '../pages/cadastro-team/cadastro-team';
import { EditarTeamPage } from '../pages/editar-team/editar-team';
import { ListaTeamPage } from '../pages/lista-team/lista-team';

@NgModule({
  declarations: [
    MyApp,
    CadastroTeamPage,
    EditarTeamPage,
    ListaTeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroTeamPage,
    EditarTeamPage,
    ListaTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }