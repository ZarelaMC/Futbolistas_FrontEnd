import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Futbolista } from '../models/futbolista.model';


//Bases URL
const urlFutbolista = AppSettings.API_ENDPOINT+ '/futbolista';

@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {
  private urlFutbolista = AppSettings.API_ENDPOINT+ '/futbolista';
  constructor(private http:HttpClient) {}

  //Listar según ID
  listarFutbolistaSegunId(id:number):Observable<any> {
    return this.http.get<any>(`${this.urlFutbolista}/futbolista/`+id);
  }

  //Listar todos
  listarFutbolistaTodos():Observable<any> {
    return this.http.get<Futbolista>(`${this.urlFutbolista}/futbolista`);
  }

}
