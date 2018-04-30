import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('frm') signMeForm: NgForm;
  readonly subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  readonly defaultSubscription = 'Advanced';
  submitted = false;

  submitValue = { email: '', subscriptionType: '', password: ''};

  onSubmit(): void {
    this.submitted = true;
    this.submitValue.email = this.signMeForm.value.email;
    this.submitValue.subscriptionType = this.signMeForm.value.subscriptionType;
    // console.log(this.signMeForm);
    this.submitValue.password = this.signMeForm.value.password;
    this.signMeForm.form.reset({ subscriptionType: this.defaultSubscription});
  }
}
