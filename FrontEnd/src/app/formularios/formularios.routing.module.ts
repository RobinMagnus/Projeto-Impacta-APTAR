import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios.component';
import { FormularioDeEntregaTecnicosComponent } from './formulario-de-entrega-tecnicos/formulario-de-entrega-tecnicos.component';
import { AberturaDeChamadoEmpresaComponent } from './abertura-de-chamado-empresa/abertura-de-chamado-empresa.component';

const routes: Routes = [
  { 
    path: '', 
    component: FormulariosComponent,
    children: [
      { 
        path: 'aberturaDeChamado',
        children: [
          { path: 'perfil-empresa/:tipoUsuario', component: AberturaDeChamadoEmpresaComponent }
        ]
      },
      {
        path: 'formularioDeEntregaTecnico', 
        children: [
          { path: 'perfil-tecnico/:tipoUsuario', component: FormularioDeEntregaTecnicosComponent }
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
