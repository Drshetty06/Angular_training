import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_API = 'http://localhost:7008/index';

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.AUTH_API}/login`, data).pipe(
      map((response: any) => {
        console.log('Login token', response);
        const token = response.accessToken;
        const userId = data.email;
        if (token) {
          this.tokenStorageService.saveToken(token, userId);
        }
        return response;
      })
    );
  }

  logout(): void {
    this.tokenStorageService.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = this.tokenStorageService.getToken();
    return !!token;
  }

  getToken(): string | null {
    return this.tokenStorageService.getToken();
  }
}
