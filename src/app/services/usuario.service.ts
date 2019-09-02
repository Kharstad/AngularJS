import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<Usuario> = [
    {uid: "1", nome: "Naruto", email: "naruto@gmail.com", psw: "11111"},
    {uid: "2", nome: "Ruffy", email: "ruffy@gmail.com", psw: "22222"}
  ];
  constructor(
    protected http:HttpClient
  ) { }

  protected db = environment.serverAPI

  save(usuario:Usuario){
    //this.usuarios.push(usuario);
    return this.http.post(this.db + "usuarios", usuario);
  }

  getAll(){
    return this.http.get(this.db+"usuarios");
  }
}
