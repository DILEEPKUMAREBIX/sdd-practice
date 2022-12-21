import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get("https://crudcrud.com/api/0803de00669d45e0b4bc87fcfd700b73/employee");
  }

  deleteEmployee(empId: any) {
    return this.httpClient.delete("https://crudcrud.com/api/0803de00669d45e0b4bc87fcfd700b73/employee/" + empId);
  }
}
