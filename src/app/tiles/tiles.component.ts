import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  services = {
    coloum1: [
      { imageUrl: '../../assets/Tile/power-cord.png', data: 'Electrical Services' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
    coloum2: [
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
    coloum3: [
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
  };

  products = {
    coloum1: [
      { imageUrl: '../../assets/Tile/power-cord.png', data: 'Generators' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
    coloum2: [
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
    coloum3: [
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' },
      { imageUrl: '', data: '' }
    ],
  };

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public goToProductPage(line, index) {
    console.log(line, index);
    this.route.navigate(['/product']);
  }

  public goToServicePage(line, index) {
    console.log(line, index);
    this.route.navigate(['/service']);
  }

}
