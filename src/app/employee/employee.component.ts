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

  name: any ='';
  salary: any = '';
  age: any = '';
  photo: any = '';

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

  onSubmit() {
    let employeeObj = {
      'name': this.name,
      'age': this.age,
      'salary': this.salary,
      'photo': this.photo
    }

    this.empService.createEmployee(employeeObj).subscribe(
      (success: any) => {
        console.log(success);
        this.getEmployees();
      },
      (error: any) => {

      }
    )
  }

  _id: any = ''
  isEdit: boolean = false;
  editEmployee(editItem: any) {
    this.name = editItem.name;
    this.age = editItem.age;
    this.salary = editItem.salary;
    this.photo = editItem.photo;
    this._id = editItem._id;

    this.isEdit = true;
  }

  onUpdate() {
    let employeeObj = {
      'name': this.name,
      'age': this.age,
      'salary': this.salary,
      'photo': this.photo,
    }

    this.empService.updateEmployee(employeeObj, this._id).subscribe(
      (success: any) => {
        console.log(success);
        this.getEmployees();

        this.name = '';
        this.age = '';
        this.salary = '';
        this.photo = '';
        this._id = '';

        this.isEdit = false;
      },
      (error: any) => {

      }
    )
  }

}
