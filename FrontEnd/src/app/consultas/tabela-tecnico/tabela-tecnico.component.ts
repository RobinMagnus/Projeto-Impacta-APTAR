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

  
  displayedColumns = ['numeroChamado', 'status', 'endereco', 'tecnico', 'acoes' ]

  getButtonColor(status: number): string {
    switch (status) {
      case 0: return 'accent';
      case 1: return 'primary';
      case 2: return 'primary';
      default: return '';
    }
  }

  getButtonLabel(status: number): string {
    switch (status) {
      case 0: return 'Á FAZER';
      case 1: return 'ADAPTAR';
      case 2: return 'ENCERRADO';
      default: return '';
    }
  }

}
  


