import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Funcionario } from '../../models/funcionario/funcionario';
import { EditarTeamPage } from '../editar-team/editar-team';
import { CadastroTeamPage } from '../cadastro-team/cadastro-team';

@IonicPage()
@Component({
  selector: 'page-lista-team',
  templateUrl: 'lista-team.html',
})

export class ListaTeamPage {

  Funcionario$: FirebaseListObservable<Funcionario[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.Funcionario$ = this.database.list('Lista de Funcionarios');
  }

  selecionarNovoFuncionario(novoFuncionario: Funcionario) {
    this.actionSheetCtrl.create({
      title: `${novoFuncionario.nome}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(EditarTeamPage,
              { novoFuncionarioId: novoFuncionario.$key });

          }
        },
        {
          text: 'Remover',
          role: 'destructive',
          handler: () => {
            this.Funcionario$.remove(novoFuncionario.$key);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("CANCELADO");
          }
        }
      ]
    }).present();
  }

  cadastroPage() {
    this.navCtrl.push(CadastroTeamPage);
  }

}
