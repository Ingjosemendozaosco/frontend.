import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'; // ⬅️ CORRECCIÓN 1: Importar environment con ruta relativa

// ⬅️ CORRECCIÓN 2: Usar environment.apiUrl para apuntar al BACKEND (webgym-backend.onrender.com)
const API_BASE = `${environment.apiUrl}api/calificaciones`;

@Injectable({ providedIn: 'root' })
export class CalificacionesService {

  private readonly base = API_BASE;

  constructor(private http: HttpClient) {}

  // Productos
  calificarProducto(productoId: number, body: { puntuacion: number; comentario?: string }) {
    return this.http.post(`${this.base}/producto/${productoId}`, body);
  }

  resumenProducto(productoId: number) {
    return this.http.get<{ promedio: number; cantidad: number }>(`${this.base}/producto/${productoId}/resumen`);
  }

  // Membresías
  calificarMembresia(membresiaId: number, body: { puntuacion: number; comentario?: string }) {
    return this.http.post(`${this.base}/membresia/${membresiaId}`, body);
  }

  resumenMembresia(membresiaId: number) {
    return this.http.get<{ promedio: number; cantidad: number }>(`${this.base}/membresia/${membresiaId}/resumen`);
  }

  // Planes
  calificarPlan(planId: number, body: { puntuacion: number; comentario?: string }) {
    return this.http.post(`${this.base}/plan/${planId}`, body);
  }

  resumenPlan(planId: number) {
    return this.http.get<{ promedio: number; cantidad: number }>(`${this.base}/plan/${planId}/resumen`);
  }
}
