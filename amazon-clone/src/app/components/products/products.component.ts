import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  images1 = [
    '../../../assets/images/items-slide1/1.jpg',
    '../../../assets/images/items-slide1/2.jpg',
    '../../../assets/images/items-slide1/3.jpg',
    '../../../assets/images/items-slide1/14.jpg',
    '../../../assets/images/items-slide1/4.jpg',
    '../../../assets/images/items-slide1/5.jpg',
    '../../../assets/images/items-slide1/6.jpg',
    '../../../assets/images/items-slide1/7.jpg',
    '../../../assets/images/items-slide1/8.jpg',
    '../../../assets/images/items-slide1/9.jpg',
    '../../../assets/images/items-slide1/10.jpg',
    '../../../assets/images/items-slide1/11.jpg',
    '../../../assets/images/items-slide1/12.jpg',
    '../../../assets/images/items-slide1/13.jpg',
  ];
  images2 = [
    '../../../assets/images/items-slide2/1.jpg',
    '../../../assets/images/items-slide2/2.jpg',
    '../../../assets/images/items-slide2/3.jpg',
    '../../../assets/images/items-slide2/14.jpg',
    '../../../assets/images/items-slide2/4.jpg',
    '../../../assets/images/items-slide2/5.jpg',
    '../../../assets/images/items-slide2/6.jpg',
    '../../../assets/images/items-slide2/7.jpg',
    '../../../assets/images/items-slide2/8.jpg',
    '../../../assets/images/items-slide2/9.jpg',
    '../../../assets/images/items-slide2/10.jpg',
    '../../../assets/images/items-slide2/11.jpg',
    '../../../assets/images/items-slide2/12.jpg',
    '../../../assets/images/items-slide2/13.jpg',
  ];
  images3 = [
    '../../../assets/images/items-slide3/1.jpg',
    '../../../assets/images/items-slide3/2.jpg',
    '../../../assets/images/items-slide3/3.jpg',
    '../../../assets/images/items-slide3/14.jpg',
    '../../../assets/images/items-slide3/4.jpg',
    '../../../assets/images/items-slide3/5.jpg',
    '../../../assets/images/items-slide3/6.jpg',
    '../../../assets/images/items-slide3/7.jpg',
    '../../../assets/images/items-slide3/8.jpg',
    '../../../assets/images/items-slide3/9.jpg',
    '../../../assets/images/items-slide3/10.jpg',
    '../../../assets/images/items-slide3/11.jpg',
    '../../../assets/images/items-slide3/12.jpg',
    '../../../assets/images/items-slide3/13.jpg',
    '../../../assets/images/items-slide3/14.jpg',
    '../../../assets/images/items-slide3/15.jpg',
    '../../../assets/images/items-slide3/16.jpg',
    '../../../assets/images/items-slide3/17.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
