import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { FormTecnicoComponent } from '../cadastro/form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from '../cadastro/form-empresa/form-empresa.component';
import { TabelaTecnicoComponent } from './tabela-tecnico/tabela-tecnico.component';
import { TabelaEmpresaComponent } from './tabela-empresa/tabela-empresa.component';
import { ConsultaTecnicoComponent } from './consulta-tecnico/consulta-tecnico.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';

const routes: Routes = [
  { 
    path: '', 
    component: ConsultasComponent,
    children: [
      { 
        path: '', component: ConsultaEmpresaComponent,
        children: [
          { path: 'formEmpresa', component: FormEmpresaComponent },
          { path: ':tipoUsuario', component: FormEmpresaComponent },

          { path: 'formEmpresa/:tipoUsuario', component: FormEmpresaComponent },
          { path: 'tabEmpresa', component: TabelaEmpresaComponent }
        ]
      },
      {
        path: '', component: ConsultaTecnicoComponent,
        children: [
          { path: 'formTecnico', component: FormTecnicoComponent },
          { path: ':tipoUsuario', component: FormTecnicoComponent },
          { path: 'formTecnico/:tipoUsuario', component: FormTecnicoComponent },
          { path: 'tabTecnico', component: TabelaTecnicoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
