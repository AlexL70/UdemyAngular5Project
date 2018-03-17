import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private components: number[] = [];

  onNumberAdded(event: {num: number}) {
    this.components.push(event.num);
  }

  onStartGame() {
    this.components = [];
  }
}
