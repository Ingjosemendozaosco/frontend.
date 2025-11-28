import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from './http.util';
import { environment } from './../../environments/environment'; // ⬅️ CORRECCIÓN 1: Importar environment con ruta relativa

@Injectable({ providedIn: 'root' })
export class AdminReservasService {
  // ⬅️ CORRECCIÓN 2: Usar environment.apiUrl para apuntar al BACKEND (webgym-backend.onrender.com)
  private readonly base = `${environment.apiUrl}api/admin/reservas`;

  constructor(private http: HttpClient) {}

  semana(p: { desde: string; productoId?: number; membresiaId?: number }) {
    const params: any = { desde: p.desde };
    if (p.productoId) params.productoId = p.productoId;
    if (p.membresiaId) params.membresiaId = p.membresiaId;

    return this.http.get<any[]>(`${this.base}/semana`, {
      params: toHttpParams(params),
    });
  }
}
