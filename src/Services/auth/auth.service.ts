import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.ApiUrl + '/instructor';
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
}
