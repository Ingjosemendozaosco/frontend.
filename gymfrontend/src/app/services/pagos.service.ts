import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from './http.util';
import { environment } from './../../environments/environment'; // ⬅️ CORRECCIÓN 1: Importar environment con ruta relativa

// ⬅️ CORRECCIÓN 2: Usar environment.apiUrl para apuntar al BACKEND (webgym-backend.onrender.com)
const API = `${environment.apiUrl}api/pagos`;

@Injectable({ providedIn: 'root' })
export class PagosService {

  private readonly base = API;

  constructor(private http: HttpClient) {}

  iniciar(usuarioId: number, metodoPago: 'YAPE' | 'PAYPAL') {
    return this.http.post<any>(`${this.base}/iniciar`, null, {
      params: toHttpParams({ usuarioId, metodoPago })
    });
  }

  confirmar(pedidoId: number, referenciaPago?: string) {
    return this.http.post<any>(`${this.base}/${pedidoId}/confirmar`, null, {
      params: toHttpParams({ referenciaPago })
    });
  }

  crearPreferenciaMercadoPago(usuarioId?: number) {
    const options = usuarioId ? { params: toHttpParams({ usuarioId }) } : {};
    return this.http.post<any>(`${this.base}/mercadopago/preferencia`, null, options as any);
  }

  crearPreferenciaDirecta(titulo: string, monto: number, usuarioId?: number) {
    const params: any = { titulo, monto };
    if (usuarioId != null) params.usuarioId = usuarioId;

    return this.http.post<any>(`${this.base}/mercadopago/preferencia-directa`, null, {
      params: toHttpParams(params)
    });
  }
}
