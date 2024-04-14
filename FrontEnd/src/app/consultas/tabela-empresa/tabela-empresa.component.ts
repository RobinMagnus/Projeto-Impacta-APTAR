import { Component } from '@angular/core';
import { ConsultasService } from '../consultas.service';
import { Observable } from 'rxjs';
import { Chamados } from 'src/app/models/chamado';

@Component({
  selector: 'app-tabela-empresa',
  templateUrl: './tabela-empresa.component.html',
  styleUrls: ['./tabela-empresa.component.css']
})
export class TabelaEmpresaComponent {
  chamados: Observable<Chamados[]>;
  

  constructor(private consultaService: ConsultasService){
   
    this.chamados = this.consultaService.list();
  };

  
  displayedColumns = ['numeroChamado', 'status', 'endereco', 'tecnico' ]

}


