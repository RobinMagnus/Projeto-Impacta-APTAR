import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tecnicoEncontrado?: any;
  empresaEncontrada?: any;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string) {
    // Criar o objeto JSON com os dados de login
    const body = { email: email };

    // Enviar solicitação POST para o backend
    return this.http.post<any>('http://localhost:8080/login', body);
  }
  
  // Mover a lógica de mapeamento para dentro do método login
  logintest(email: string) {
    const body = { email: email };

    return this.http.post<any>('http://localhost:8080/login', body).pipe(
      tap(data => console.log('Resposta do login:', data)),
      map(([tecnicos, empresas]) => {
        console.log('Email:', email);

        this.tecnicoEncontrado = tecnicos.find((item: any) => item.email == email);
        this.empresaEncontrada = empresas.find((item: any) => item.email == email);

        console.log('Técnico encontrado:', this.tecnicoEncontrado);
        console.log('Empresa encontrada:', this.empresaEncontrada);

        if (this.tecnicoEncontrado) {
          this.router.navigate(['/consultas', this.tecnicoEncontrado.id]);
        } else if (this.empresaEncontrada) {
          this.router.navigate(['/consultas', this.empresaEncontrada.id]);
        }

        return [this.tecnicoEncontrado, this.empresaEncontrada];
      })
    );
  }

  getTecnicoEncontrado() {
    return this.tecnicoEncontrado;
  }
  
  getEmpresaEncontrada() {
    return this.empresaEncontrada;
  }
}
