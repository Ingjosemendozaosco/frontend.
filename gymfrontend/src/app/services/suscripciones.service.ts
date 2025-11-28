import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'; // ⬅️ CORRECCIÓN 1: Importar environment con ruta relativa

@Injectable({ providedIn: 'root' })
export class SuscripcionesService {
  // ⬅️ CORRECCIÓN 2: Usar environment.apiUrl para apuntar al BACKEND (webgym-backend.onrender.com)
  private base = `${environment.apiUrl}api/suscripciones`;

  constructor(private http: HttpClient) {}

  crear(body: {
    membresiaId?: number;
    planSuscripcionId?: number;
    metodoPago?: string;
    monto?: number;
    comprobanteUrl?: string;
  }) {
    return this.http.post<any>(`${this.base}`, body);
  }

  mias() {
    return this.http.get<any[]>(`${this.base}/mias`);
  }
}
