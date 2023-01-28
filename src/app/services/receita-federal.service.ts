import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReceitaFederalClient } from '../interfaces/ReceitaFederalClient';

export class Constants {
  public static API_ENDPOINT: string =
    'https://api.cpfcnpj.com.br/5ae973d7a997af13f0aaf2bf60e65803/9/';
}

@Injectable({
  providedIn: 'root',
})
export class ReceitaFederalService {
  readonly apiURL: string = Constants.API_ENDPOINT;

  constructor(private http: HttpClient) {}

  public async getDataFromCPF(cpf: string): Promise<ReceitaFederalClient> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.apiURL}/${cpf}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (v) => resolve(v as ReceitaFederalClient),
          error: (e) => reject(e),
          complete: () => console.log('complete'),
        });
    });
  }
}
