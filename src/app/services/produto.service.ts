import { Injectable } from '@angular/core';
import { Produto } from "../model/produto";
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    protected http:HttpClient,
    protected dbfire:AngularFireDatabase
  ) { }

  protected db = environment.serverAPI

  save(produtos:Produto){
    return this.dbfire.list("produtos").push(produtos);
  }

  getAll(){
    return this.dbfire.list("produtos").snapshotChanges().pipe(
      map(changes =>
      changes.map(c => ({key: c.payload.key, ...c.payload.val() })))
    );
  }
  get(key){
    return this.dbfire.object<Produto>("produtos/" + key).valueChanges()
  }

  update(produto: Produto, key){
    return this.dbfire.object<Produto>("produtos/" + key).update(produto);
  }

  remove(key){
    return this.dbfire.object("produtos/" + key).remove()
  }
}