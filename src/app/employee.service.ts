import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get("https://crudcrud.com/api/55788cffe61e4f3b917c70bb89afeafb/employee");
  }

  deleteEmployee(empId: any) {
    return this.httpClient.delete("https://crudcrud.com/api/55788cffe61e4f3b917c70bb89afeafb/employee/" + empId);
  }

  createEmployee(empObj: any) {
    return this.httpClient.post("https://crudcrud.com/api/55788cffe61e4f3b917c70bb89afeafb/employee", empObj);
  }

  updateEmployee(empObj: any, id: any) {
    return this.httpClient.put("https://crudcrud.com/api/55788cffe61e4f3b917c70bb89afeafb/employee/" + id, empObj);
  }
}
