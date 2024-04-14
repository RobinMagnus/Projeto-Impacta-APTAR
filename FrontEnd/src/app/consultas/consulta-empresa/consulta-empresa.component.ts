import { Component, OnInit } from '@angular/core';
import { Chamados } from 'src/app/models/chamado';
import { Endereco } from 'src/app/models/endereco';
import { ConsultasService } from '../consultas.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styleUrls: ['./consulta-empresa.component.css']
})
export class ConsultaEmpresaComponent implements OnInit {
  tipoUsuario?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recupera o tipo de usuário dos parâmetros de rota
    this.tipoUsuario = history.state.tipoUsuario;
  }


}
