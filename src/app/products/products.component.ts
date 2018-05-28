import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productCard = [
    {
      imageUrl: '../../assets/Tile/bag.jpg',
      productData: 'The Blue Pink Polyester 15 Litres Grey Laptop Bag Blue Pink Polyester 15 Litres Grey Laptop',
      price: '12333'
    },
    { imageUrl: '', productData: '', price: '' },
    { imageUrl: '', productData: '', price: '' },
    { imageUrl: '', productData: '', price: '' },
    { imageUrl: '', productData: '', price: '' },
    { imageUrl: '', productData: '', price: '' },
    { imageUrl: '', productData: '', price: '' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
