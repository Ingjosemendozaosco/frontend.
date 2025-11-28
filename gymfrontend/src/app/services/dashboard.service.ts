import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'; // ⬅️ ¡CORRECCIÓN FINAL! Usamos ruta RELATIVA

@Injectable({ providedIn: 'root' })
export class DashboardService {

    // La URL base se construye correctamente usando environment.apiUrl
    private readonly base = `${environment.apiUrl}api/dashboard`;

    constructor(private http: HttpClient) {}

    resumen(usuarioId: number) {
        // La URL final será: https://webgym-backend.onrender.com/api/dashboard/{usuarioId}
        return this.http.get<any>(`${this.base}/${usuarioId}`);
    }
}
