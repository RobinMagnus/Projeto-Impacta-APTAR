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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent
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
