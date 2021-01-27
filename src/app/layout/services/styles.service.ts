import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GeneralFormStyles, Styles } from 'src/app/layout/types/layout.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class StylesService {
  constructor(private http: HttpClient) {
  }

  getStyles(): Observable<Styles[]> {
    return this.http.get<Styles[]>(`${environment.apiUrl}/styles`);
  }

  getGeneralStyles(): Observable<GeneralFormStyles> {
    return this.http.get<GeneralFormStyles>(`${environment.apiUrl}/general-styles`);
  }
}
