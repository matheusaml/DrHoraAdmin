export interface Funcionario {
  $key?: string,
  nome: string;
  cpf: number;
  telefone: number;
  especialidade: string;
  endereco: string;
  foto: File;
}
