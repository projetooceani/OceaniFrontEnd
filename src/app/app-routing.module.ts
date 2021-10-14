import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//-------------------------------------------------------
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EsqueceuComponent } from './esqueceu/esqueceu.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { OceaniComponent } from './oceani/oceani.component';
import { OngsComponent } from './ongs/ongs.component';
import { TemaComponent } from './tema/tema.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {path: '', redirectTo: 'oceani', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'oceani', component: OceaniComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'esqueceu', component: EsqueceuComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'ongs', component: OngsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

