import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { EditarTeamPage } from './editar-team';

@NgModule({
  declarations: [EditarTeamPage],
  imports: [IonicPageModule.forChild(EditarTeamPage)],
  entryComponents: [EditarTeamPage]
})
export class EditarTeamModulePage { }