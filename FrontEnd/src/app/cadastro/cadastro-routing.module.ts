import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { FormTecnicoComponent } from './form-tecnico/form-tecnico.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';

const routes: Routes = [
  { path: '', component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
