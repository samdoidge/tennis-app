import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatchDetail, MatchSummary, MatchToCreate, MatchCreated } from './match.types';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  createMatch(body: MatchToCreate): Observable<MatchCreated> {
    return this.http.post<MatchCreated>(`${environment.apiUrl}matches`, body);
  }

  getMatch(id: string): Observable<MatchDetail> {
    return this.http.get<MatchDetail>(`${environment.apiUrl}matches/${id}`);
  }

  getMatches(): Observable<MatchSummary[]> {
    return this.http.get<MatchSummary[]>(`${environment.apiUrl}matches`);
  }
}
