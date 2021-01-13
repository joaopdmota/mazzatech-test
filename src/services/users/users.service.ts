import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/users/users.component';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  readonly apiURL : string;


  constructor(private http : HttpClient) {
    this.apiURL = 'https://jsonplaceholder.typicode.com';
  }

  public getUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.apiURL}/users`).toPromise();
  }
}
