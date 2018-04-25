import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('frm') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    //  console.log(form);
    console.log(`User Name: ${this.signupForm.value['username']}`);
    console.log(`Email: ${this.signupForm.value['email']}`);
    console.log(`Secret: ${this.signupForm.value['secret']}`);
    console.log(`Answer: ${this.signupForm.value['questionAnswer']}`);
    console.log(`Valid: ${this.signupForm.valid}`);
  }
}
