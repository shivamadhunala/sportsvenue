import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _registerUrl = 'http://localhost:3000/users/signup';
  // tslint:disable-next-line: variable-name
  private _loginUrl = 'http://localhost:3000/users/login';
  loggedInEmail = '';
  loggedIn = false;
  constructor(private http: HttpClient) { }
  registerUser(registerObj) {
    return this.http.post<any>(this._registerUrl, registerObj);
  }

  loginUser(loginObj) {
    return this.http.post<any>(this._loginUrl, loginObj);
  }

  logOut() {
      localStorage.removeItem('Token');
      this.loggedIn = false;
      this.loggedInEmail = '';
  }
}
