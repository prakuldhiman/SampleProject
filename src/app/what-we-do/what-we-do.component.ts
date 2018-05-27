import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  data = `dshdbshbdhdb sdbsdb sbdsd ssbdjsbd jb  jdjd jjb  jfbjfbf jbfj  j bfjfbsj jfbj jj  
  jdfb j  jjfsdjsjdf jfjbjfjsdf jsfbjfjdsjsdf jsjsjdfbsjf fsdf jsjsjjjsjdfs sd s jsd js jsjsjsssjsjsjf
  dshdbshbdhdb sdbsdb sbdsd ssbdjsbd jb  jdjd jjb  jfbjfbf jbfj  j bfjfbsj jfbj jj  jdfb j 
   jjfsdjsjdf jfjbjfjsdf jsfbjfjdsjsdf jsjsjdfbsjf fsdf jsjsjjjsjdfs sd s jsd js jsjsjsssjsjsjf`
  boxes = [{ imageUrl: '../../assets/Tile/s4.jpg', info:  this.data, title: 'hello janab'}, { imageUrl: '' }, { imageUrl: '' }];
  extra = [{ imageUrl: '' }, { imageUrl: '' }, { imageUrl: '' }];
  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   if (this.boxes.length > 0) {
    //     this.extra.push(this.boxes[0]);
    //     this.boxes.splice(0, 1);
    //     this.boxes.push(this.extra[0]);
    //     this.extra.splice(0, 1);
    //   }
    // }, 2000);
  }

}
