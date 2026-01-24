import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { API_BASE } from '../core/api.constants';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  login(data: any) {
    return this.http.post(`${API_BASE}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${API_BASE}/register`, data);
  }

  saveToken(token: string) {
    if (this.isBrowser) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (this.isBrowser) {
      return localStorage.getItem('token');
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem('token');
    }
    return false; // server-side always false
  }

  logout() {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
