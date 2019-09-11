import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 
  protected db = environment.serverAPI;

  constructor(
    protected http:HttpClient,
    protected dbfire:AngularFireDatabase
  ) { }

  save(usuarios:Usuario){
    //this.usuarios.push(usuario);
    //return this.http.post(this.db + "usuarios", usuarios);
    return this.dbfire.list("usuarios").push(usuarios);
  }
  getAll(){
    //return this.http.get(this.db + "usuarios");
    return this.dbfire.list("usuarios").snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
}
