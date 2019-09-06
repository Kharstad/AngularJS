import { Endereco } from './endereco';

export class Usuario {
    uid: string;
    nome: string;
    email: string;
    psw: string;
    endereco: Endereco = new Endereco;
}
