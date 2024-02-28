// cadastro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TecnicoDTOinput } from '../models/TecnicoDTOinput';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/tecnicos';

  constructor(private http: HttpClient) {}

  save(tecnicoData: TecnicoDTOinput): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, tecnicoData, { headers });
  }
}

