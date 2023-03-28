import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http: HttpClient) { }

  sendTempPassword(email: string): Observable<any> {
   
    return this.http.post(`http://localhost:7008/index/forgotpassword`, { email })
   

    }
  }
