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
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //   this.signupForm.setValue({userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({ userData: { username: suggestedName }});
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(`User Name: ${this.signupForm.value['userData']['username']}`);
    console.log(`Email: ${this.signupForm.value['userData']['email']}`);
    console.log(`Secret: ${this.signupForm.value['secret']}`);
    console.log(`Answer: ${this.signupForm.value['questionAnswer']}`);
    console.log(`Gender: ${this.signupForm.value['gender']}`);
    console.log(`Valid: ${this.signupForm.valid}`);
  }
}
