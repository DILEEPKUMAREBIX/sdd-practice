import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get("https://crudcrud.com/api/3cf802b9542b4edb891bf96a40a98e20/employee");
  }

  getEmployeeId(empId: any) {
    return this.httpClient.get("https://crudcrud.com/api/3cf802b9542b4edb891bf96a40a98e20/employee/"+ empId);
  }

  deleteEmployee(empId: any) {
    return this.httpClient.delete("https://crudcrud.com/api/3cf802b9542b4edb891bf96a40a98e20/employee/" + empId);
  }

  createEmployee(empObj: any) {
    return this.httpClient.post("https://crudcrud.com/api/3cf802b9542b4edb891bf96a40a98e20/employee", empObj);
  }

  updateEmployee(empObj: any, id: any) {
    return this.httpClient.put("https://crudcrud.com/api/3cf802b9542b4edb891bf96a40a98e20/employee/" + id, empObj);
  }
}
