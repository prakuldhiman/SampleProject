import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  boxes = [1, 2, 3];
  extra = [4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.boxes.length > 0) {
        this.extra.push(this.boxes[0]);
        this.boxes.splice(0, 1);
        this.boxes.push(this.extra[0]);
        this.extra.splice(0, 1);
      }
    }, 2000);
  }

}
