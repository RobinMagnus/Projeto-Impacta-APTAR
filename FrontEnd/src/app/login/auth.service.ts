import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  usuarioAutenticado:boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(private router: Router) { }

  fazerLogin(usuario:Usuario){
    if(usuario.email === 'usuario@email.com' &&
    usuario.senha === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/consultas']);

    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
  
  get verificaUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
