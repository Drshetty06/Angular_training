import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {
 
  constructor(private http: HttpClient) { 
    
  }
  
  sendOtp(email: string): Observable<any> {
  
    return this.http.post(`http://localhost:7008/index/sendotp`,  {email});
  }
}


