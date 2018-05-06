import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.projectNameValidator.bind(this)]),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
    this.projectForm.patchValue({status: 'Stable'});
  }

  onSubmit() {
    console.log( this.projectForm);
  }

  projectNameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test') {
      return {'testValue': true};
    }
    return null;
  }
}
