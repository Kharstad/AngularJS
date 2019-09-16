import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../model/produto'

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  protected produtos:any;

  constructor(
    public produtoService: ProdutoService,
    protected router:Router 
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll()
  }

  editar(produto: any){
    this.ngOnInit()
    this.router.navigate(["addProduto", produto.key])
  }

  apagar(produto: any){
    if(confirm("Apagar o Produto?"))
      this.produtoService.remove(produto.key)
  }

}
