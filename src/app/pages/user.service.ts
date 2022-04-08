import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface CreateUserDto { username: string, password: string, email: string, }


interface IUser {
  username: string,
  email: string,
  password: string,
  accessToken: string,
  _id: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}users/register`, userData)
  }
  login$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}users/login`, userData)
  }

  getAuthToken(){
    return localStorage.getItem('authToken')
  }
  getUsername(){
    return localStorage.getItem('username');
  }
  getUserId(){
    return localStorage.getItem('userId');
  }
  isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
  }
  logout(){
    window.localStorage.clear();
  }
}
