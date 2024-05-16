import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent  {  
  
  tipoUsuario?: string;
  tecnicoEncontrado: any;
  empresaEncontrada: any;

  

  constructor(private router: Router

  ) {}

  Consultas() {
  
      this.tipoUsuario = history.state.tipoUsuario;
      console.log('consulta' + this.tipoUsuario)
    
      if (this.tipoUsuario && this.tipoUsuario.length === 11) {
        this.tecnicoEncontrado= true;
        this.router.navigate(['/consultas']);
      
    } 
    if  (this.tipoUsuario && this.tipoUsuario.length === 14) {
      this.empresaEncontrada=true;
      this.router.navigate(['/consultas']);
  
    }
}
}
