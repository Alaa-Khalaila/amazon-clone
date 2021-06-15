import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-nav-search-input',
  templateUrl: './search-nav-search-input.component.html',
  styleUrls: ['./search-nav-search-input.component.css'],
})
export class SearchNavSearchInputComponent implements OnInit {
  faSearch = faSearch;
  catagories: string[] = [
    'All',
    'Arts & Crafts',
    'Automotive',
    ' Baby',
    'Books',
    'Kindle Store',
  ];

  constructor() {}

  ngOnInit(): void {}
}
