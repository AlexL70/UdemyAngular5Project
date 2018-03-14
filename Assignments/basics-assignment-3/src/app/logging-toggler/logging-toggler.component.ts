import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging-toggler',
  templateUrl: './logging-toggler.component.html',
  styleUrls: ['./logging-toggler.component.css']
})
export class LoggingTogglerComponent implements OnInit {
  showParagraph = false;
  count = 0;
  logArr: Date[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.logArr.push(new Date);
  }

  getColor(id: number) {
    if (id >= 4) {
      return 'blue';
    } else {
      return 'default';
    }
  }

}
