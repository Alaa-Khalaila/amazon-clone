import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/items-slide2/13.jpg',
    '../../../assets/images/items-slide1/1.jpg',
    '../../../assets/images/items-slide3/13.jpg',
    '../../../assets/images/items-slide2/2.jpg',
    '../../../assets/images/items-slide1/8.jpg',
    '../../../assets/images/items-slide3/13.jpg',
    '../../../assets/images/items-slide2/3.jpg',
    '../../../assets/images/items-slide1/13.jpg',
    '../../../assets/images/items-slide3/5.jpg',
    '../../../assets/images/items-slide2/2.jpg',
    '../../../assets/images/items-slide1/10.jpg',
    '../../../assets/images/items-slide3/13.jpg',
    '../../../assets/images/items-slide2/9.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
