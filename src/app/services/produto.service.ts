import { Injectable } from '@angular/core';
import { Produto } from "../model/produto";
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    protected http:HttpClient
  ) { }

  protected db = environment.serverAPI

  save(produto:Produto){
    return this.http.post(this.db + "produtos", produto);
  }

  getAll(){
    return this.http.get(this.db+"produtos");
  }

}