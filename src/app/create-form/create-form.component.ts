import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  firstName: any = '';
  lastName: any = '';
  age: any;
  salary: any;

  @Output() passMember = new EventEmitter<any>();
  //@Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let obj = {
      'firstName': this.firstName,
      'lastName': this.lastName,
      'age': this.age,
      'salary': this.salary
    }
    console.log(obj);
    this.passMember.emit(obj);
  }

}
