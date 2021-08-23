import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss']
})
export class ScrollingComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
