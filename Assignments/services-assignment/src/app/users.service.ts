import { EventEmitter } from '@angular/core';

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    activateEvent = new EventEmitter<void>();
    deactivateEvent = new EventEmitter<void>();

    activate(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.activateEvent.emit();
    }

    deactivate(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.deactivateEvent.emit();
    }
}
