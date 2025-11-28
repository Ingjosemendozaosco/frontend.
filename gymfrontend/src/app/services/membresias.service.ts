import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from './http.util';
import { environment } from './../../environments/environment'; // ⬅️ CORRECCIÓN 1: Importar environment con ruta relativa

// ⬅️ CORRECCIÓN 2: Usar environment.apiUrl para apuntar al BACKEND (webgym-backend.onrender.com)
const API_BASE = `${environment.apiUrl}api/membresias`;

@Injectable({ providedIn: 'root' })
export class MembresiasService {

  private readonly base = API_BASE;

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.base);
  }

  obtener(id: number) {
    return this.http.get<any>(`${this.base}/${id}`);
  }

  adquirir(id: number, usuarioId: number, monto?: number) {
    return this.http.post<any>(`${this.base}/${id}/adquirir`, null, {
      params: toHttpParams({ usuarioId, monto })
    });
  }
}
