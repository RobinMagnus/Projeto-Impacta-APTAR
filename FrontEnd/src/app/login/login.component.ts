import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CadastroService} from "../services/cadastro.service";
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario = {email:'', senha:''};
  
  constructor(private authService: AuthService
  ) {
    
  }

  onSubmit(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }


}
