import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatches(): Observable<any> {
    return this.http.get(`${environment.apiUrl}matches`);
  }
}
