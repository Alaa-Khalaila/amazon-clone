import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
})
export class BackToTopComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scroll() {
    document
      .getElementById('MyElem')
      ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
}
