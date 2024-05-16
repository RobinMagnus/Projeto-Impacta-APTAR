import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tipoUsuario: any;
  tecnicoEncontrado: any;
  empresaEncontrada: any;

  

  constructor(private route: ActivatedRoute,
    private authService: AuthService

  ) {}

  ngOnInit() {
    this.tipoUsuario = history.state.tipoUsuario;
    console.log('consulta' + this.tipoUsuario)
    
    if (this.tipoUsuario && this.tipoUsuario.length === 11) {
      this.tecnicoEncontrado = this.authService.getTecnicoEncontrado();
  } 
  if  (this.tipoUsuario && this.tipoUsuario.length === 14) {
    this.empresaEncontrada = this.authService.getEmpresaEncontrada();

  }


}
}
