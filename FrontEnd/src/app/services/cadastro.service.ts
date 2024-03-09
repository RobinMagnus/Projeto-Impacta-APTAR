import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";
import {TecnicoDtoinput} from "../models/tecnico-dtoinput";
import {EmpresaDTOinput} from "../models/empresa-dtoinput";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/tecnicos';

  constructor(private http: HttpClient) {
  }

  saveTec(tecnicoData: TecnicoDtoinput): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, tecnicoData, {headers});
  }

  saveEmp(empData: EmpresaDTOinput): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, empData, {headers});
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
    console.log(cep);
    cep = cep.replace(/\D/g, "");
    if (cep !== "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
      }
    }
    return of({});
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.get('senha');
      const confirmPassword = control.get('confirmarsenha');

      return password && confirmPassword && password.value === confirmPassword.value ? null : {passwordMismatch: true};
    };
  }
}
