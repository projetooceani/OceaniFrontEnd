import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Router} from "@angular/router";
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTemas: Tema[]
  idTema: number
  tema: Tema = new Tema()

  iduser = environment.id
  usuario: Usuario = new Usuario()

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private auth: AuthService,
    private postagemService: PostagemService) { }

  ngOnInit(){
    if (environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas();
    this.getAllPostagens();
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTemas(this.idTema).subscribe((resp: Tema)=> {
      this.tema = resp
    })
  }

  findUserById(){
    this.auth.getUserById(this.iduser).subscribe((resp: Usuario)=> {
      this.usuario = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }


  postar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.iduser
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem realizada com sucesso')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
