import {UsersService} from './users.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    activated = 0;
    deactivated = 0;

    constructor(private usersService: UsersService) {
        this.usersService.activateEvent.subscribe(() => this.activated++);
        this.usersService.deactivateEvent.subscribe(() => this.deactivated++);
    }
}
