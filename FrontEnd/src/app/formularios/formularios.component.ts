import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

 tipoUsuario?: string;
  tecnicoEncontrado:boolean = false;
  empresaEncontrada:boolean = false;

  

  constructor(private route: ActivatedRoute,
    private authService: AuthService

  ) {}

  ngOnInit() {
    this.tipoUsuario = history.state.tipoUsuario;
    console.log('consulta' + this.tipoUsuario)
  
    if (this.tipoUsuario && this.tipoUsuario.length === 11) {
    this.authService.getTecnicoEncontrado(),
    this.tecnicoEncontrado= true;
  } 
  if  (this.tipoUsuario && this.tipoUsuario.length === 14) {
    this.authService.getEmpresaEncontrada();
    this.empresaEncontrada=true;

  }

}
}
