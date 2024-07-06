import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Posicion } from '../models/posicion.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
  constructor(private http:HttpClient) { }

    //Listar todos
    listarPocisionesTodos():Observable<any> {
      return this.http.get<Posicion>(`${this.baseUrlUtil}/listaPosicion`);
    }
}


