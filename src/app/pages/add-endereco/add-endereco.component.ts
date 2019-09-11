import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-add-endereco',
  templateUrl: './add-endereco.component.html',
  styleUrls: ['./add-endereco.component.css']
})
export class AddEnderecoComponent implements OnInit {

  @Input() public endereco: Endereco;

  constructor(
    protected enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  buscaCEP(event){
    let cep:string = event.target.value;
    if (cep.length > 7){
    this.enderecoService.getEndereco(cep).subscribe(
      res => {
        if (res.erro) {
          console.log("cep não localizado ", res);
        } else {
          this.endereco.cep = res.cep;
          this.endereco.logradouro = res.logradouro;
          this.endereco.bairro = res.bairro;
          this.endereco.localidade = res.localidade;
          this.endereco.uf = res.uf;
          this.endereco.unidade = res.unidade;
          this.endereco.gia = res.gia;
          this.endereco.ibge = res.ibge;
          this.endereco.complemento = res.complemento;
          console.log(this.endereco);
        }
      },
      err => {
        this.endereco = new Endereco;
        console.log("Cep inválido",err);
      }
    )
  }
  }
}
