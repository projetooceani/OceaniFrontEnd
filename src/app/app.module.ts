import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { OceaniComponent } from './oceani/oceani.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { EsqueceuComponent } from './esqueceu/esqueceu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {OrderModule} from "ngx-order-pipe";
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { OngsComponent } from './ongs/ongs.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    LoginComponent,
    InicioComponent,
    TemaComponent,
    OceaniComponent,
    PostagemEditComponent,
    TemaEditComponent,
    PostagemDeleteComponent,
    TemaDeleteComponent,
    EsqueceuComponent,
    UsuarioComponent,
    UsuarioEditComponent,
    OngsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        OrderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
