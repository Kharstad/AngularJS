import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario;
  public endereco: Endereco = new Endereco;

  constructor(
    public usuarioService: UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {

  }
  onsubmit(form){
    console.log(form);
    this.usuario.endereco = this.endereco
    this.usuarioService.save(this.usuario).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );
    this.usuario = new Usuario;
    //console.log(this.usuario, this.usuarioService.usuarios);
    form.reset();
    //this.router.navigate(["/"])

  }
}
