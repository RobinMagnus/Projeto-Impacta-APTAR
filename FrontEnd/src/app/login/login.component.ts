import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('Chamando função de login');
    this.authService.login(this.email).subscribe(
      (res) => {
        console.log('Resposta do login recebida:', res);
        
        if (res && res.cpf) {
          console.log('Redirecionando para consulta do técnico');
          this.router.navigate(['consultas', 'consultaTecnico'], { state: { tipoUsuario: res.cpf } });
        } else if (res && res.cnpj) {  
          console.log('Redirecionando para consulta da empresa');
          this.router.navigate(['consultas', 'consultaEmpresa'], { state: { tipoUsuario: res.cnpj } });
        } else {
          console.log('Nenhum usuário encontrado');
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
  
}  