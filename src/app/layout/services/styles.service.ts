import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Styles } from '../types/layout.types';

@Injectable()
export class StylesService {
  constructor(private http: HttpClient) {
  }

  getStyles(): Observable<Styles> {
    return this.http.get<Styles>('http://localhost:3000/styles');
  }
}
