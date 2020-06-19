import { Gasto } from './gasto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class GastoService {
  gastoList: Gasto[] = [];

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Gasto> {
    const url = `http://localhost:8081/gasto/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Gasto>(url, {params, headers});
  }

  load(): void {
    this.find().subscribe(result => {
        this.gastoList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Gasto[]> {
    const url = `http://localhost:8081/gasto`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Gasto[]>(url, {headers});
  }

  save(entity: Gasto): Observable<Gasto> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://localhost:8081/gasto/${entity.id}`;
      return this.http.put<Gasto>(url, entity, {headers});
    } else {
      url = `http://localhost:8081/gasto/`;
      return this.http.post<Gasto>(url, entity, {headers, params});
    }
  }

  delete(entity: Gasto): Observable<Gasto> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://localhost:8081/gasto/${entity.id.toString()}`;
      return this.http.delete<Gasto>(url, {headers});
    }
    return null;
  }
}

