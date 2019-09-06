import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-add-endereco',
  templateUrl: './add-endereco.component.html',
  styleUrls: ['./add-endereco.component.css']
})
export class AddEnderecoComponent implements OnInit {

  @Input() public endereco: Endereco = new Endereco;

  constructor() { }

  ngOnInit() {
  }

}
