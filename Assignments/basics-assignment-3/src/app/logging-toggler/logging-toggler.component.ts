import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging-toggler',
  templateUrl: './logging-toggler.component.html',
  styleUrls: ['./logging-toggler.component.css']
})
export class LoggingTogglerComponent implements OnInit {
  showParagraph = false;
  count = 0;
  logArr: LogRec[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    const rec = new LogRec();
    rec.id = ++this.count;
    rec.stamp = new Date();
    this.logArr.push(rec);
  }

}

export class LogRec {
  id: number;
  stamp: Date;
}
