import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-nav-item',
  templateUrl: './search-nav-item.component.html',
  styleUrls: ['./search-nav-item.component.css'],
})
export class SearchNavItemComponent implements OnInit {
  @Input() upperText: string = '';
  @Input() downText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
