import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080';
    private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
            tap(response => {
                localStorage.setItem('jwt', response.jwt); // assuming response contains JWT as 'jwt'
                this.isAuthenticated.next(true);
            })
        );
    }

    register(userData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/api/users`, userData);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated.value;
    }

    logout(): void {
        localStorage.removeItem('jwt');
        this.isAuthenticated.next(false);
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('jwt');
    }
}
