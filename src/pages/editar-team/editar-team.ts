import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Funcionario } from '../../models/funcionario/funcionario';

@IonicPage()
@Component({
  selector: 'page-editar-team',
  templateUrl: 'editar-team.html',
})
export class EditarTeamPage {

  novoFuncionarioSubscription: Subscription;
  Funcionario$: FirebaseObjectObservable<Funcionario>;
  novoFuncionario = {} as Funcionario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoFuncionarioId = this.navParams.get('novoFuncionarioId');
    console.log(novoFuncionarioId);

    this.Funcionario$ = this.database.object(`Lista de Funcionarios/${novoFuncionarioId}`);
    this.novoFuncionarioSubscription =
      this.Funcionario$.subscribe(novoFuncionario => this.novoFuncionario = novoFuncionario);
  }

  editarNovoFuncionario(novoFuncionario: Funcionario) {
    this.Funcionario$.update(novoFuncionario);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoFuncionarioSubscription.unsubscribe();
  }
}
