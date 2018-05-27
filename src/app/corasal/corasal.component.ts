import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corasal',
  templateUrl: './corasal.component.html',
  styleUrls: ['./corasal.component.css']
})
export class CorasalComponent implements OnInit {
  public images = [
    '../../assets/image1.jpg',
    '../../assets/image2.jpg',
    '../../assets/image3.jpg',
    '../../assets/image4.jpg',
    '../../assets/image5.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
