import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { tick } from '@angular/core/testing';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private gameIsStarted = false;
  private timerRef: NodeJS.Timer;
  @Output() elementCreated = new EventEmitter<{num: number}>();
  @Output() gameStarted = new EventEmitter<{}>();
  private counter;

  emitComponent = function(emitter: EventEmitter<{num: number}>) {
    if (this.counter === undefined) {
      this.counter = 0;
    }
    this.counter++;
    emitter.emit({num: this.counter});
  };

  startGame() {
    this.gameIsStarted = true;
    this.gameStarted.emit({});
    this.timerRef = setInterval( this.emitComponent, 1000, this.elementCreated);
  }

  stopGame() {
    this.gameIsStarted = false;
    clearInterval(this.timerRef);
    setTimeout(function() {
      this.counter = 0;
    }, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
