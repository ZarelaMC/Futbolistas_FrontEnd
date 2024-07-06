import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posicion } from '../models/posicion.model';

const urlPosicion = AppSettings.API_ENDPOINT+ '/posicion';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {
private urlPosicion = AppSettings.API_ENDPOINT+ '/posicion';

  constructor(private http:HttpClient) {}

  //Listar todos
  listarPocisionesTodos():Observable<any> {
    return this.http.get<Posicion>(`${this.urlPosicion}/listaPosicion`);
  }
}
