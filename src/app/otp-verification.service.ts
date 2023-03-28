import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {
  private apiUrl = 'http://localhost:7008/index/verifyotp';

  constructor(private http: HttpClient) {}

  verifyOtp(email: string, otp: string) {
    const payload = { email, otp };
    return this.http.post(this.apiUrl, payload);
  }
}
