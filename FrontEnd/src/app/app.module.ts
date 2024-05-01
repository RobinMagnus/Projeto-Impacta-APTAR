import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';
import {CadastroModule} from "./cadastro/cadastro.module";
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import { ConsultasModule } from './consultas/consultas.module';
import { AuthService } from './login/auth.service';
import { ConsultasComponent } from './consultas/consultas.component';
import { AberturaChamadoEmpresaComponent } from './formularios/formularios/abertura-chamado-empresa/abertura-chamado-empresa.component';
import { FormularioDeEntregaTecnicoComponent } from './formularios/formularios/formulario-de-entrega-tecnico/formulario-de-entrega-tecnico.component';
import { FormulariosComponent } from './formularios/formularios/formularios.component';
import { AberturaDeChamadoEmpresaComponent } from './formularios/abertura-de-chamado-empresa/abertura-de-chamado-empresa.component';
import { FormularioDeEntregaTecnicosComponent } from './formularios/formulario-de-entrega-tecnicos/formulario-de-entrega-tecnicos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    ConsultasComponent,
    AberturaChamadoEmpresaComponent,
    FormularioDeEntregaTecnicoComponent,
    FormulariosComponent,
    AberturaDeChamadoEmpresaComponent,
    FormularioDeEntregaTecnicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    CadastroModule,
    AppMaterialModule,
    ConsultasModule
  ],
  exports: [],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
