import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  myEmployees: any = [];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getAllEmployees().subscribe(
      (success: any) => {
        this.myEmployees = success;
        console.log(this.myEmployees);
      },
      (error: any) => {

      }
    )
  }

  deleteEmployee(empId: any) {
    this.empService.deleteEmployee(empId).subscribe(
      (success: any) => {
        console.log(success);
        this.getEmployees();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
