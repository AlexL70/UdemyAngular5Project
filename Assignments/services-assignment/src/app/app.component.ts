import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent {
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  getActivated(): number {
    return this.counterService.activated;
  }

  getDeactivated(): number {
    return  this.counterService.deactivated;
  }
}
