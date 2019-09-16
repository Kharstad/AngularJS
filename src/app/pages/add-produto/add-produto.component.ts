import { Component, OnInit } from '@angular/core';
import { Produto } from "../../model/produto";
import { ProdutoService } from '../../services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  produto:Produto = new Produto;
  private id: string = null;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router,
    protected activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id =
    this.activeRouter.snapshot.paramMap.get("id");
    if(this.id){
    this.produtoService.get(this.id).subscribe(
      res=>{
        this.produto = res;
      }
    );
  } 
  }
  onsubmit(form){
    console.log(form);
    if (this.id) {
      this.produtoService.update(this.produto, this.id).then(
        res => {
          console.log(res);
          this.produto = new Produto;
          form.reset();
          //this.router.navigate(["/"]);
          alert("Atualizado!");
        },
        err => {
          console.log(err);
        }
      );      
    } else {
      this.produtoService.save(this.produto).then(
        res => {
          console.log(res);
          this.produto = new Produto;
          form.reset();
          //this.router.navigate(["/"]);
          alert("Cadastrado!");
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
