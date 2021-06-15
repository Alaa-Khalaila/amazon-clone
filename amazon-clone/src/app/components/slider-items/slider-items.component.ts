import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
