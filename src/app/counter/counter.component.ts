import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countNumber: any = 0;
  counters: any = [];
  i: any = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  resetButton() {
    this.countNumber = 0;
  }

  increaseButton() {
    this.countNumber += 1;
  }

  decreaseButton() {
    this.countNumber -= 1;
  }

  addCounter() {
    this.counters.push(this.i++);
  }

  removeCounter(item: any) {
    this.counters = this.counters.filter((x: any) => x != item)
  }
}
