import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl: string = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<{ items: User[] }> {
    return this.http.get<{ items: User[] }>(`${this.apiUrl}${query}`);
  }
}
