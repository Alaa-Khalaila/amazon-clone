import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css'],
})
export class SearchNavComponent implements OnInit {
  constructor() {}
  faMapMarkerAlt = faMapMarkerAlt;
  faShoppingCart = faShoppingCart;

  ngOnInit(): void {}
}
