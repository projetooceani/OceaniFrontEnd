import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  foto = environment.foto
  idUsuario: number

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  key = 'data'
  reverse = true

  idUser = environment.id
  nome: string = environment.nome;

  constructor(
    private authService: AuthService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.idUsuario = this.route.snapshot.params['id']
  }

}
