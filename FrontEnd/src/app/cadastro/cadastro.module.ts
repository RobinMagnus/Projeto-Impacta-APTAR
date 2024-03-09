import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import { FormTecnicoComponent } from './form-tecnico/form-tecnico.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';

@NgModule({
  declarations: [
    FormTecnicoComponent,
    FormEmpresaComponent
  ],
  exports: [
    FormTecnicoComponent,
    FormEmpresaComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CadastroModule { }
