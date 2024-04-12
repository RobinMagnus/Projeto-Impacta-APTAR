import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamados } from 'src/app/models/chamado';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-tabela-tecnico',
  templateUrl: './tabela-tecnico.component.html',
  styleUrls: ['./tabela-tecnico.component.css']
})
export class TabelaTecnicoComponent {
  
  chamados: Observable<Chamados[]>;
  

  constructor(private consultaService: ConsultasService){
   
    this.chamados = this.consultaService.list();
  };

  
  displayedColumns = ['numeroChamado', 'status', 'endereco', 'tecnico' ]

}
  


