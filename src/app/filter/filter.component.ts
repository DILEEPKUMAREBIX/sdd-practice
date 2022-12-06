import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  enteredAge: any
  enteredSalary: any;

  onFilter(event: any) {
    // this.filteredMembers = this.myFamilyMembers.filter(x => x.age >= this.enteredAge);
    // this.filteredMembers = this.filteredMembers.filter((y:any) => y.salary >= this.enteredSalary);

    // this.filteredMembers = this.myFamilyMembers.filter((x: any) => (x.age >= this.enteredAge && x.salary >= this.enteredSalary));
  }

  ngOnInit(): void {
  }

}
