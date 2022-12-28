import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lch',
  templateUrl: './lch.component.html',
  styleUrls: ['./lch.component.css']
})
export class LchComponent {

  @Input() showLCH: any;
  
  constructor() {
    // alert('constructor ' + this.showLCH);
  }

  // ngOnInit(): void {
  //   alert('onInit ' + this.showLCH)
  // }

  // ngAfterViewInit() {
  //   alert('afterViewInit')
  // }

  // ngOnDestroy() {
  //   alert('Destroy')
  // }
}
