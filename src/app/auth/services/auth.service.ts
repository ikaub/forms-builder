import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Token, User } from '../types/auth.types';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  login({email, password}: User): void {
    const token: Observable<Token> = this.http.post<Token>(
      `${environment.apiUrl}/login`,
      {email, password},
      {headers: new HttpHeaders({'Content-type': 'application/json'})}
    );
    token.subscribe(jwtToken => {
      localStorage.setItem('token', jwtToken.access_token);
      this.router.navigate(['/form-builder']);
    });
  }

  isAuthorized(): boolean {
    return !!this.getToken()?.length;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
