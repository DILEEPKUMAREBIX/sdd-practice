import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get("https://crudcrud.com/api/55f54011c2ac40df82c7122177dc0872/employee");
  }

  deleteEmployee(empId: any) {
    return this.httpClient.delete("https://crudcrud.com/api/55f54011c2ac40df82c7122177dc0872/employee/" + empId);
  }

  createEmployee(empObj: any) {
    return this.httpClient.post("https://crudcrud.com/api/55f54011c2ac40df82c7122177dc0872/employee", empObj);
  }

  updateEmployee(empObj: any, id: any) {
    return this.httpClient.put("https://crudcrud.com/api/55f54011c2ac40df82c7122177dc0872/employee/" + id, empObj);
  }
}
