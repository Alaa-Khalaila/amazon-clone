import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.component.html',
  styleUrls: ['./slider-items.component.css'],
})
export class SliderItemsComponent implements OnInit {
  @Input() header: string = '';
  @Input() linkType: string = '';

  images1: string[] = [
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

  images2: string[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
