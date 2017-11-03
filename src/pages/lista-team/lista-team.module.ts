import { NgModule } from '@angular/core';
import { ListaTeamPage } from './lista-team';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ListaTeamPage],
  imports: [IonicPageModule.forChild(ListaTeamPage)],
  entryComponents: [ListaTeamPage]
})
export class ListaTeamPageModule { }