import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn: boolean = false;

  constructor() { }


  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  setLoginStatus(status: boolean): void {
    this.isUserLoggedIn = status;
  }

  logOut(): void {
    localStorage.removeItem('auth_token');
  }
}
