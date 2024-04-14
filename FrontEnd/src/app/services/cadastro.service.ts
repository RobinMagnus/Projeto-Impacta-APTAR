import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, catchError, of, throwError} from 'rxjs';
import { FormControl} from "@angular/forms";
import {TecnicoDtoinput} from "../models/tecnico-dtoinput";
import {EmpresaDTOinput} from "../models/empresa-dtoinput";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private urlTec = 'http://localhost:8080/tecnicos';
  private urlEmp = 'http://localhost:8080/empresas';
  constructor(private http: HttpClient) {
  }

  
  saveTec(tecnicoData: TecnicoDtoinput): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.urlTec, tecnicoData, {headers});
  }

  saveEmp(empData: EmpresaDTOinput): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.urlEmp, empData, {headers});
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep != null && !cep.isEmpty) {
      const validacep = /^[0-9]{5}-[0-9]{3}$/;
      return validacep.test(cep) ? null : {cepInvalido: true};
    }
    return null;
  }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, "");
    if (cep !== "") {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
      }
    }
    return of({});
  }

  validarCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]/g, '');

    if (cnpj.length !== 14) {
      return false;
    }

    let soma = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj.charAt(i)) * peso;
      peso--;
      if (peso === 1) {
        peso = 9;
      }
    }
    let digito1 = 11 - (soma % 11);
    if (digito1 > 9) {
      digito1 = 0;
    }
    soma = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(cnpj.charAt(i)) * peso;
      peso--;
      if (peso === 1) {
        peso = 9;
      }
    }
    let digito2 = 11 - (soma % 11);
    if (digito2 > 9) {
      digito2 = 0;
    }
    return parseInt(cnpj.charAt(12)) === digito1 && parseInt(cnpj.charAt(13)) === digito2;
  }

  validarCPF(cpf: string | null): boolean {
    if (!cpf) {
      return false;
    }

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf === '' || /^(\d)\1+$/.test(cpf) || cpf.length !== 11) {
      return false;
    }

    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }

    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  updateTec(tecnicoData: TecnicoDtoinput): Observable<any> {
    const url = `${this.urlTec}/tecnico`; // Supondo que a rota para atualizar o técnico seja '/tecnico' na sua API
    return this.http.put<any>(url, tecnicoData)
      .pipe(
        catchError(error => {
          // Aqui você pode tratar os erros, se necessário
          console.error('Erro ao atualizar técnico:', error);
          return throwError(error);
        })
      );
  }


}
