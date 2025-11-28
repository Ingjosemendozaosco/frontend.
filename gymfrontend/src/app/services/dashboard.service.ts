import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // ⬅️ PASO CLAVE: Importar el entorno

@Injectable({ providedIn: 'root' })
export class DashboardService {

    // La URL base se construye correctamente usando environment.apiUrl
    private readonly base = `${environment.apiUrl}api/dashboard`;

    constructor(private http: HttpClient) {}

    resumen(usuarioId: number) {
        // La URL final será: https://webgym-backend.onrender.com/api/dashboard/123
        return this.http.get<any>(`${this.base}/${usuarioId}`);
    }
}
