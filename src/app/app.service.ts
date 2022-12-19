import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(pageNumber: any) {
    return this.httpClient.get('https://reqres.in/api/users?page='+ pageNumber)
  }
}
