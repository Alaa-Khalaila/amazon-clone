import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css'],
})
export class CardItemsComponent implements OnInit {
  @Input() header: string = '';

  @Input() cardImageSrc1: string = '';
  @Input() cardImageSrc2: string = '';
  @Input() cardImageSrc3: string = '';
  @Input() cardImageSrc4: string = '';

  @Input() cardText1: string = '';
  @Input() cardText2: string = '';
  @Input() cardText3: string = '';
  @Input() cardText4: string = '';

  @Input() linkType: string = '';

  constructor() {}

  ngOnInit(): void {}
}
