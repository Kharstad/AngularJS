import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<Usuario> = [
    {uid: "1", nome: "Naruto", email: "naruto@gmail.com", psw: "11111"},
    {uid: "2", nome: "Ruffy", email: "Ruffy@gmail.com", psw: "22222"}
  ];
  constructor() { }

  save(usuario:Usuario){
    this.usuarios.push(usuario);
  }
}
