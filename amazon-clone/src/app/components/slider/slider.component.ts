import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  images: string[] = [
    '../../../assets/images/slider0.jpg',
    '../../../assets/images/slider1.jpg',
    '../../../assets/images/slide2.jpg',
    '../../../assets/images/slider2.jpg',
  ];

  currnetImage: number = 0;

  currentImageName: string = this.images[this.currnetImage];

  constructor() {}

  ngOnInit(): void {}

  nextImage() {
    if (this.currnetImage === 3) {
      this.currnetImage = 0;
      this.currentImageName = this.images[this.currnetImage];
    } else {
      this.currnetImage = this.currnetImage + 1;
      this.currentImageName = this.images[this.currnetImage];
    }
  }
  previusImage() {
    if (this.currnetImage === 0) {
      this.currnetImage = 3;
      this.currentImageName = this.images[this.currnetImage];
    } else {
      this.currnetImage = this.currnetImage - 1;
      this.currentImageName = this.images[this.currnetImage];
    }
  }
}
