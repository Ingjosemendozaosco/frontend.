import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // ⬅️ PASO CLAVE: Importar el entorno

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    // La URL base se construye usando environment.apiUrl (por ejemplo, https://webgym-backend.onrender.com/)
    // y se le añade el path específico de este servicio (/api/usuarios).
    private readonly base = `${environment.apiUrl}api/usuarios`;

    constructor(private http: HttpClient) {}

    obtener(id: number) { 
        return this.http.get<any>(`${this.base}/${id}`); 
    }

    actualizar(id: number, data: Partial<{ telefono: string; direccion: string }>) { 
        return this.http.patch<any>(`${this.base}/${id}`, data); 
    }

    me() { 
        return this.http.get<any>(`${this.base}/me`); 
    }
}
