import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { CadastroTeamPage } from './cadastro-team';

@NgModule({
  declarations: [CadastroTeamPage],
  imports: [IonicPageModule.forChild(CadastroTeamPage)],
  entryComponents: [CadastroTeamPage]
})
export class CadastroTeamModulePage { }