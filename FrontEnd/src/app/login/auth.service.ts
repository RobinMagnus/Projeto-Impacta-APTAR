import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  usuarioAutenticado:boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
    private http: HttpClient
  ) { }

  login(email: string, senha: string): Observable<any> {
    const loginTecnico$ = this.http.get<any>('http://localhost:8080/tecnicos');
    const loginEmpresa$ = this.http.get<any>('http://localhost:8080/empresas');
  
    return forkJoin([loginTecnico$, loginEmpresa$]).pipe(
      tap(([tecnicos, empresas]) => {
        console.log('Técnicos:', tecnicos);
        console.log('Empresas:', empresas);
      }),
      map(([tecnicos, empresas]) => {
        console.log('Email:', email);
        console.log('Senha:', senha);
  
        const tecnico = tecnicos.find((item:any) => item.email === email && item.senha === senha);
        const empresa = empresas.find((item:any) => item.email === email && item.senha === senha);
  
        console.log('Técnico encontrado:', tecnico);
        console.log('Empresa encontrada:', empresa);
  
        return [tecnico, empresa];
      })
    );
  }
  
  

  fazerLogin(usuario:Usuario){
    if(usuario.email === 'usuario@email.com' &&
    usuario.senha === '123') {
      const idUsuario = 2;
      usuario.id = idUsuario;
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/consultas', usuario.id]);

    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
  
  get verificaUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
