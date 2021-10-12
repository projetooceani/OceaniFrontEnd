import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  user: Usuario =  new Usuario()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0
    )
    if(environment.token == ''){
      //alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/home'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar(){

    if(this.user.senha != this.confirmarSenha){
     alert('As senhas estão incorretas')
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp


      alert('Usuário atualizado com sucesso, faça o login novamente!')
        environment.token = ''
        environment.nome = ''
        environment.token = ''
        environment.id  = 0

        this.router.navigate(['/login'])
      })
    }
  }

  findByIdUser(id: number){
    this.authService.getUserById(id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

}
