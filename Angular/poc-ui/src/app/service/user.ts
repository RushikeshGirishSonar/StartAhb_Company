import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
