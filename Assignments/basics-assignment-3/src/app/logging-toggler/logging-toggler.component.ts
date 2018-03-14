import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging-toggler',
  templateUrl: './logging-toggler.component.html',
  styleUrls: ['./logging-toggler.component.css']
})
export class LoggingTogglerComponent implements OnInit {
  showParagraph = false;

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
  }

}
