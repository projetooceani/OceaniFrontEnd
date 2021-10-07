import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {UsuarioLogin} from "../model/UsuarioLogin";
import {environment} from "../../environments/environment.prod";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id
      environment.nome = this.usuarioLogin.nome
      environment.tipo = this.usuarioLogin.tipo
      environment.foto = this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 401) {
        alert('usuario ou senha incorretos')
      }

    })
  }
}
