import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from './interfaces/usuairos.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl:string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.apiUrl}users?page=1`);
  }

  getUnUsuario(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}users/${id}`);
  }
}
