import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { tokenNotExpired } from "angular2-jwt";


@Injectable()
export class AuthService {
  authToken: any;
  user: any;


  constructor(
    private http: HttpClient,
    private config: ConfigService,
    ) { }

  registerUser(user){
    var url = this.config.baseServiceUrl + 'users/register';

    return this.http.post<AuthResponse>(url, user);
  }

  usernameExists(user){
    var url = this.config.baseServiceUrl + 'users/usernameExists';

    return this.http.post<AuthResponse>(url, user);
  }


  authenticateUser(user){
    var url = this.config.baseServiceUrl + 'users/authenticate';

    return this.http.post<AuthResponse>(url, user);
  }

  getUserProfile(){
    var url = this.config.baseServiceUrl + 'users/profile';
    var profileVal =  this.http.get<AuthResponse>(url);
    return profileVal;
  }

  storeUserData(token, user){
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){
    return tokenNotExpired(null, localStorage.getItem('id_token'));
  }

}

export interface AuthResponse {
  success: boolean,
  msg: string,
  token: string,
  user: any
}
