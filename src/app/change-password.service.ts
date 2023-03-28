import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

 
  private API_URL = 'http://localhost:7008/index/changePassword';

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) { }

 public resetPassword(email: string,currentPassword: string, newPassword: string, confirmPassword: string): Promise<boolean> {
  const accessToken = this.tokenStorageService.getToken();

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  });

  const body = {
    email: email,
    currentPassword: currentPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword
  };

  return this.http.post<any>(this.API_URL, body, { headers: headers })
    .toPromise()
    .then(response => {
      return response.success as boolean;
    });
}
}
