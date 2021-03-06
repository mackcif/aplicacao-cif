import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  searchCEP(cep:string){
    const url = `${environment.cepBaseUrl}/ws/${cep}/json/`;
    return this.http.get(url);
  }
}
