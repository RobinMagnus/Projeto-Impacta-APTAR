import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { FormTecnicoComponent } from '../cadastro/form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from '../cadastro/form-empresa/form-empresa.component';
import { TabelaTecnicoComponent } from './tabela-tecnico/tabela-tecnico.component';
import { TabelaEmpresaComponent } from './tabela-empresa/tabela-empresa.component';
import { ConsultaTecnicoComponent } from './consulta-tecnico/consulta-tecnico.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { FormularioDeEntregaTecnicosComponent } from '../formularios/formulario-de-entrega-tecnicos/formulario-de-entrega-tecnicos.component';
import { AberturaDeChamadoEmpresaComponent } from '../formularios/abertura-de-chamado-empresa/abertura-de-chamado-empresa.component';

const routes: Routes = [
  { 
    path: '', 
    component: ConsultasComponent,
    children: [
      { 
        path: 'consultaEmpresa',
        children: [
          { path: 'perfil-empresa/:tipoUsuario', component: ConsultaEmpresaComponent },
          { path: 'formEmpresa/:tipoUsuario', component: FormEmpresaComponent },
          { path: 'tabEmpresa/:tipoUsuario', component: TabelaEmpresaComponent },
        { path: 'aberturaChamados/tabAbertura/:tipoUsuario', component: AberturaDeChamadoEmpresaComponent }
    ]
  }
        ]
      },
      {
        path: 'consultaTecnico', 
        children: [
          { path: 'perfil-tecnico/:tipoUsuario', component: ConsultaTecnicoComponent },
          { path: 'formTecnico/:tipoUsuario', component: FormTecnicoComponent },
          { path: 'tabTecnico/:tipoUsuario', component: TabelaTecnicoComponent },
          { path: 'formularioEntrega/tabEntrega/:tipoUsuario', component: FormularioDeEntregaTecnicosComponent }
        ]
      }
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
