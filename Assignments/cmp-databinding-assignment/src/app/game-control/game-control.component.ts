import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameStarted = false;

  startGame() {
    this.gameStarted = true;
  }

  stopGame() {
    this.gameStarted = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
