import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { FormTecnicoComponent } from './cadastro/form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from './cadastro/form-empresa/form-empresa.component';
import { ConsultaEmpresaComponent } from './consultas/consulta-empresa/consulta-empresa.component';
import { ConsultaTecnicoComponent } from './consultas/consulta-tecnico/consulta-tecnico.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormularioDeEntregaTecnicosComponent } from './formularios/formulario-de-entrega-tecnicos/formulario-de-entrega-tecnicos.component';
import { AberturaDeChamadoEmpresaComponent } from './formularios/abertura-de-chamado-empresa/abertura-de-chamado-empresa.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'cadastro',
loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
},
{path: 'formtecnico', component: FormTecnicoComponent},
{ path: 'formempresa', component: FormEmpresaComponent},
{ path: 'consultaEmpresa', component: ConsultaEmpresaComponent},
{ path: 'consultaTecnico/:cpf', component: ConsultaTecnicoComponent},
{ path: 'consultas', 
loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
},
{path: 'aberturaChamados/tabAbertura/:tipoUsuario', component: AberturaDeChamadoEmpresaComponent },
{path: 'formularioEntrega/tabEntrega/:tipoUsuario', component: FormularioDeEntregaTecnicosComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
