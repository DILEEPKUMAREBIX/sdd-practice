import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFamilyMembers: any = [];
  // [
  //   {
  //     'firstName': 'Dileep',
  //     'lastName': 'K',
  //     'age': 29,
  //     'salary': 10000
  //   },
  //   {
  //     'firstName': 'Dileep1111',
  //     'lastName': 'K',
  //     'age': 19,
  //     'salary': 20000
  //   }
  // ]
  filteredMembers: any;


  // dependenct injection
  constructor(private httpClient: HttpClient) {
    this.filteredMembers = this.myFamilyMembers
  }

  pageNumber = 1
  //success and error call back functions
  ngOnInit() {
    this.httpClient.get('https://reqres.in/api/users?page='+ this.pageNumber).subscribe(
      (test: any) => {
        console.log(test);
        this.filteredMembers = test.data;
        console.log(test.data[0].email)
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.httpClient.get('https://reqres.in/api/users?page=' + this.pageNumber).subscribe(
      (test: any) => {
        console.log(test);
        // this.filteredMembers.push(...test.data);
        this.filteredMembers = test.data;
        console.log(test.data[0].email)
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  previousPage() {
    this.pageNumber = this.pageNumber - 1;
    this.httpClient.get('https://reqres.in/api/users?page=' + this.pageNumber).subscribe(
      (test: any) => {
        console.log(test);
        // this.filteredMembers.push(...test.data);
        this.filteredMembers = test.data;
        console.log(test.data[0].email)
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  onDataEntered(obj: any) {
    this.filteredMembers.push(obj);
  }




}