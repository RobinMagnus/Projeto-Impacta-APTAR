import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { FormTecnicoComponent } from '../cadastro/form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from '../cadastro/form-empresa/form-empresa.component';
import { TabelaTecnicoComponent } from './tabela-tecnico/tabela-tecnico.component';
import { TabelaEmpresaComponent } from './tabela-empresa/tabela-empresa.component';

const routes: Routes = [
  { path: '', component: ConsultasComponent, children: [
    { path: 'formEmpresa', component: FormEmpresaComponent },
    { path: 'formTecnico', component: FormTecnicoComponent },
    { path: 'tabTecnico', component: TabelaTecnicoComponent },
    { path: 'tabEmpresa', component: TabelaEmpresaComponent }

  ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
