import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-nav',
  templateUrl: './service-nav.component.html',
  styleUrls: ['./service-nav.component.css'],
})
export class ServiceNavComponent implements OnInit {
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {}
}
