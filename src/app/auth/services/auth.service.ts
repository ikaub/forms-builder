import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Token, User } from '../types/auth.types';
import { AppState } from '../../types/app.types';
import { selectToken } from '../store/auth.selectors';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  login({email, password}: User): Observable<Token> {
    return this.http.post<Token>(
      `${environment.apiUrl}/login`,
      {email, password},
      {headers: new HttpHeaders({'Content-type': 'application/json'})}
    );
  }

  isAuthorized(): Observable<boolean> {
    return this.store.pipe(
      select(selectToken),
      map(token => !!token.length)
    );
  }

  getToken(): Observable<string> {
    return this.store.pipe(select(selectToken));
  }
}
