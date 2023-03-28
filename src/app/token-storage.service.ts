import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
 
  private TOKEN_KEY = 'token';
  private REFRESH_TOKEN_KEY = 'refreshToken';
  private EMAIL_KEY = 'email';
  private USER_ID_KEY = 'userId';

  constructor() { }

  public saveToken(token: string, userId: string): void {
    console.log('TokenStorageService: saving token', token, userId);
    // sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY, token);
  
    // sessionStorage.removeItem(this.USER_ID_KEY);
    sessionStorage.setItem(this.USER_ID_KEY, userId);
  }
  
  public getToken(): string | null {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    console.log('TokenStorageService: retrieving token', token);
    return token;
}
 

  public getUserId(): string | null {
    return sessionStorage.getItem(this.USER_ID_KEY);
  }

  public saveRefreshToken(refreshToken: string): void {
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    sessionStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  public getRefreshToken(): string | null {
    return sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  public clear(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(this.USER_ID_KEY);
  }

  public getUser(): any {
    const token = this.getToken();
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      return user;
    }
    return null;
  }

  public saveEmail(email: string): void {
    sessionStorage.removeItem(this.EMAIL_KEY);
    sessionStorage.setItem(this.EMAIL_KEY, email);
  }

  public getEmail(): string | null {
    return sessionStorage.getItem(this.EMAIL_KEY);
  }
}
