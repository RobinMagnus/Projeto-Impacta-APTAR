import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { FormTecnicoComponent } from './cadastro/form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from './cadastro/form-empresa/form-empresa.component';
import { ConsultaEmpresaComponent } from './consultas/consulta-empresa/consulta-empresa.component';
import { ConsultaTecnicoComponent } from './consultas/consulta-tecnico/consulta-tecnico.component';

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
  { path: 'consultaTecnico', loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
},
  // { path: 'consultas/:id', 
  // loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  //  },
  { path: 'consultas', 
  loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
   },
   { path: 'consultas/consultaTecnico', 
  loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
   },
   { path: 'consultas/consultaEmpresa', 
  loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
   },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
