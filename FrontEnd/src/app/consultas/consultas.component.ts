import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsultasService } from './consultas.service';
import { TecnicoDtoinput } from '../models/tecnico-dtoinput';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit, OnDestroy {
  id: number = 0;
  inscricao: Subscription = new Subscription();
  usuario?: TecnicoDtoinput | undefined;
  mostrarMenu: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultaService: ConsultasService
  ) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']; 
        console.log(this.route.params)
        console.log(this.id);
        if (!isNaN(this.id) && this.id !== 0) {
          this.consultaService.getUsuario(this.id).subscribe(
            (usuario: TecnicoDtoinput) => {
              this.usuario = usuario;
              console.log(this.usuario); 
            },
            (error: any) => {
              console.error('Erro ao obter usuário:', error);
            }
          );
        } else {
          console.error('ID do usuário não é um número válido.');
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  edit() {
    this.consultaService.getUsuario(this.id).subscribe(
      (usuario: TecnicoDtoinput) => {
        this.usuario = usuario;
        console.log(this.usuario);
      },
      (error: any) => {
        console.error('Erro ao obter usuário:', error);
      }
    );
    this.router.navigate(['id', 'formtec']);

  }
}
