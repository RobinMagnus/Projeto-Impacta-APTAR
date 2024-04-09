import { Component, OnInit } from '@angular/core';
import { CadastroComponent } from 'src/app/cadastro/cadastro.component';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})


export class ConsultasComponent implements OnInit{

  mostrarMenu: boolean = false;
  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar:any) => this.mostrarMenu = mostrar
    );

}

}