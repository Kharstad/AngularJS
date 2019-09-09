import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-add-endereco',
  templateUrl: './add-endereco.component.html',
  styleUrls: ['./add-endereco.component.css']
})
export class AddEnderecoComponent implements OnInit {

  @Input() public endereco: Endereco = new Endereco;

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
          this.endereco = new Endereco;
        } else {
          this.endereco = res;
        }
        console.log(res);
      },
      err => {
        this.endereco = new Endereco;
        console.log(err);
      }
    )
  }
  }
}
