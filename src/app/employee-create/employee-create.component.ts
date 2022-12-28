import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private empService: EmployeeService, private router: Router) { }

  name: any = '';
  salary: any = '';
  age: any = '';
  photo: any = '';

  ngOnInit(): void {
  }

  onList() {
    this.router.navigateByUrl('/employee');
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
        this.router.navigateByUrl('/employee');
        // this.getEmployees();
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
        this.router.navigateByUrl('/employee');
        // this.getEmployees();

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
