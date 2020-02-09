import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatchDetail } from './match.types';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatch(id): Observable<MatchDetail> {
    return this.http.get<MatchDetail>(`${environment.apiUrl}matches/${id}`);
  }

  getMatches(): Observable<any> {
    return this.http.get(`${environment.apiUrl}matches`);
  }
}
