import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//-------------------------------------------------------
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { OceaniComponent } from './oceani/oceani.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [
  {path: '', redirectTo: 'oceani', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'oceani', component: OceaniComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

