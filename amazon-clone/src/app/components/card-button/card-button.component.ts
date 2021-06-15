import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css'],
})
export class CardButtonComponent implements OnInit {
  @Input() btnText: string = '';
  @Input() header: string = '';
  @Input() full: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
