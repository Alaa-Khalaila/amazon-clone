import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider-items',
  templateUrl: './slider-items.component.html',
  styleUrls: ['./slider-items.component.css'],
})
export class SliderItemsComponent implements OnInit {
  @Input() header: string = '';
  @Input() linkType: string = '';
  @Input() images: string[] = [];
  @Input() size: number = 78;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}

  nextImage() {
    console.log('next');
  }

  previusImage() {
    console.log('back');
  }
}
