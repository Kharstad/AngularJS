import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { FormsModule } from "@angular/forms";
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';
import { ListProdutoComponent } from './pages/list-produto/list-produto.component';
import { AddEnderecoComponent } from './pages/add-endereco/add-endereco.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddProdutoComponent,
    ListProdutoComponent,
    AddEnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
