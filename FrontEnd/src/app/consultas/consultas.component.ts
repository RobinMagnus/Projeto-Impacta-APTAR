import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsultasService } from './consultas.service';
import { TecnicoDtoinput } from '../models/tecnico-dtoinput';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent  {  
  
  tipoUsuario?: string;
  tecnicoEncontrado:boolean = false;
  empresaEncontrada:boolean = false;

  

  constructor(private route: ActivatedRoute,
    private authService: AuthService

  ) {}

  ngOnInit() {
    this.tipoUsuario = history.state.tipoUsuario;
    console.log(this.tipoUsuario)
    const tecnico = false;
    const empresa = false;

    if (this.tipoUsuario && this.tipoUsuario.length === 9) {
    this.authService.getTecnicoEncontrado(),
    this.tecnicoEncontrado= true;
  } 
  if  (this.tipoUsuario && this.tipoUsuario.length === 14) {
    this.authService.getEmpresaEncontrada();
    this.empresaEncontrada=true;

  }


    
  }// id: number = 0;
  // inscricao: Subscription = new Subscription();
  // usuario?: TecnicoDtoinput | undefined;
  // mostrarMenu: boolean = false;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private consultaService: ConsultasService
  // ) {
  // }

  // ngOnInit() {
  //   this.inscricao = this.route.params.subscribe(
  //     (params: any) => {
  //       this.id = params['id']; 
  //       console.log(this.route.params)
  //       console.log(this.id);
  //       if (!isNaN(this.id) && this.id !== 0) {
  //         this.consultaService.getUsuario(this.id).subscribe(
  //           (usuario: TecnicoDtoinput) => {
  //             this.usuario = usuario;
  //             console.log(this.usuario); 
  //           },
  //           (error: any) => {
  //             console.error('Erro ao obter usuário:', error);
  //           }
  //         );
  //       } else {
  //         console.error('ID do usuário não é um número válido.');
  //       }
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //   this.inscricao.unsubscribe();
  // }

  // edit() {
  //   this.consultaService.getUsuario(this.id).subscribe(
  //     (usuario: TecnicoDtoinput) => {
  //       this.usuario = usuario;
  //       console.log(this.usuario);
  //     },
  //     (error: any) => {
  //       console.error('Erro ao obter usuário:', error);
  //     }
  //   );
  //   this.router.navigate(['id', 'formtec']);

  // }
}
