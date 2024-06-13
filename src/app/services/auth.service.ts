import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:5000/cus_routes/login'; // Cambia esto por la URL de tu servidor Flask

  constructor(private http: HttpClient) { }

  login(userType: string, email: string, password: string): Observable<any> {
    const body = { email, contrasenia: password };

    return this.http.post<any>(this.baseUrl, body).pipe(
      catchError(error => {
        throw 'Error en la autenticación: ' + error.message;
      })
    );
  }
}
