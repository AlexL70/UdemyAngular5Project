import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  submitted = false;
  project = {
    name: '',
    email: '',
    status: ''
  };

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.projectNameValidator.bind(this)],
      this.projectNameValidatorAsync.bind(this)),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
    this.projectForm.patchValue({status: 'Stable'});
  }

  onSubmit() {
    this.project.name = this.projectForm.get('projectName').value;
    this.project.email = this.projectForm.get('mail').value;
    this.project.status = this.projectForm.get('status').value;
    this.submitted = true;
    this.projectForm.reset({status: 'Stable'});
  }

  projectNameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test') {
      return {'testValue': true};
    }
    return null;
  }

  projectNameValidatorAsync(control: FormControl): Promise<any> | Observer<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'testValue': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
