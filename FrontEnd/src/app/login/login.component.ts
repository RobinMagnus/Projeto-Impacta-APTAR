import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CadastroService} from "../services/cadastro.service";
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  public email: string ='';
  public senha: string = '';

  constructor(private authService: AuthService,
    private router: Router) {
    
  }

  login() {
    this.authService.login(this.email).subscribe(
      (res) => {
        console.log(res)
        let isCPF = false;
        let isCNPJ = false;
  
        if (res[0] && res[0].cpf) {
          isCPF = true;
        }
  
        if (res[1] && res[1].cnpj) {
          isCNPJ = true;
        }
  
        if (isCPF) {
          this.router.navigate(['consultas', 'consultaTecnico'], { state: { tipoUsuario: res[0].cpf } });
        } else if (isCNPJ) {  
          this.router.navigate(['consultas', 'consultaEmpresa'], { state: { tipoUsuario: res[1].cnpj } });
        } else {
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }

}
