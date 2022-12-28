import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService, private router: Router) { }

  myEmployees: any = [];



  ngOnInit(): void {
    this.getEmployees();
  }

  onCreate() {
    this.router.navigateByUrl('/employee/create');
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
        // this.getEmployees();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }



}
