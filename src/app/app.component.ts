import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFamilyMembers: any = [
    {
      'firstName': 'Dileep',
      'lastName': 'K',
      'age': 29,
      'salary': 10000
    },
    {
      'firstName': 'Dileep1111',
      'lastName': 'K',
      'age': 19,
      'salary': 20000
    },
    {
      'firstName': 'Dileep2222',
      'lastName': 'K',
      'age': 39,
      'salary': 30000
    },
    {
      'firstName': 'Dileep33333',
      'lastName': 'K',
      'age': 49,
      'salary': 40000
    }
  ]
  filteredMembers: any;
  

  constructor() {
    this.filteredMembers = this.myFamilyMembers
  }
  

}