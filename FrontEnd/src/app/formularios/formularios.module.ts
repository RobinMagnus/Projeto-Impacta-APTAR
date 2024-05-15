import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FormulariosRoutingModule } from './formularios.routing.module';
import { FormularioDeEntregaTecnicosComponent } from './formulario-de-entrega-tecnicos/formulario-de-entrega-tecnicos.component';
import { AberturaDeChamadoEmpresaComponent } from './abertura-de-chamado-empresa/abertura-de-chamado-empresa.component';

@NgModule({
  declarations: [
    FormularioDeEntregaTecnicosComponent,
    AberturaDeChamadoEmpresaComponent

  ],
  exports: [
    FormularioDeEntregaTecnicosComponent,
    AberturaDeChamadoEmpresaComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class FormulariosModule { }