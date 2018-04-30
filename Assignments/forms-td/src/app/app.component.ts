import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  readonly defaultSubscription = 'Advanced';

  onSubmit(): void {
    console.log(`Submit!`);
  }
}
