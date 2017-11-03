import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Funcionario } from '../../models/funcionario/funcionario';
import { EditarTeamPage } from '../editar-team/editar-team';

@IonicPage()
@Component({
  selector: 'page-cadastro-team',
  templateUrl: 'cadastro-team.html',
})
export class CadastroTeamPage {
  novoFuncionario = {} as Funcionario;

  Funcionario$: FirebaseListObservable<Funcionario[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.Funcionario$ = this.database.list('Lista de Funcionarios');

  }

  addFuncionario(novoFuncionario: Funcionario) {
    this.Funcionario$.push({
      nome: this.novoFuncionario.nome,
      cpf: Number(this.novoFuncionario.cpf),
      telefone: Number(this.novoFuncionario.telefone),
      especialidade: this.novoFuncionario.especialidade,
      endereco: this.novoFuncionario.endereco,
     /*  foto: (this.novoFuncionario.foto) */
    });

    this.novoFuncionario = {} as Funcionario;
    this.navCtrl.pop();
  }

    editar() {
      this.navCtrl.push(EditarTeamPage)
    }

}
