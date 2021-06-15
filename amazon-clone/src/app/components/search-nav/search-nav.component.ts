import { Component, Input, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css'],
})
export class SearchNavComponent implements OnInit {
  @Input() itemsCount: number = 0;
  faMapMarkerAlt = faMapMarkerAlt;
  faShoppingCart = faShoppingCart;

  constructor() {}

  ngOnInit(): void {}
}
