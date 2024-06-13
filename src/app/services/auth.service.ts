import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://sisvita2.onrender.com';

  constructor(private http: HttpClient) { }

  login(userType: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { userType, email, password });
  }
}