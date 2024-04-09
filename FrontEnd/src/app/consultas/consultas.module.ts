import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaTecnicoComponent } from './consulta-tecnico/consulta-tecnico.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ConsultasComponent } from './consultas.component';
import { CadastroModule } from '../cadastro/cadastro.module';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { ConsultaRoutingModule } from './consultas.routing.module';



@NgModule({
  declarations: [
    ConsultaTecnicoComponent,
    ConsultasComponent,
    ConsultaEmpresaComponent,
    
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ConsultaRoutingModule,
    CadastroModule
  ]
})
export class ConsultasModule { }
