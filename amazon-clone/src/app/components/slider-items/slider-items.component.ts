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
  element: HTMLElement | undefined;

  click: number = 0;
  shownImages: string[] = this.images;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}

  nextImage() {
    this.element = document.getElementById(this.images[0]) as HTMLElement;
    this.element.scrollLeft += 900;
  }

  previusImage() {
    this.element = document.getElementById(this.images[0]) as HTMLElement;
    this.element.scrollLeft -= 900;
  }
}
