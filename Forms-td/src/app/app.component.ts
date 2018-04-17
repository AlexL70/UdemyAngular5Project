import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    //  console.log(form);
    console.log(`User Name: ${form.value['username']}`);
    console.log(`Email: ${form.value['email']}`);
    console.log(`Secret: ${form.value['secret']}`);
  }
}
