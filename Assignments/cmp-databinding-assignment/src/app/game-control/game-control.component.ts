import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private gameStarted = false;
  private timerRef: NodeJS.Timer;

  emitComponent = function() {
    console.log('I\'m emitting somethign...');
  };

  startGame() {
    this.gameStarted = true;
    this.timerRef = setInterval( this.emitComponent, 1000);
  }

  stopGame() {
    this.gameStarted = false;
    clearInterval(this.timerRef);
  }

  constructor() { }

  ngOnInit() {
  }

}
