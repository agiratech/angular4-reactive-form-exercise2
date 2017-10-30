import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CustomValidators } from './validators/custom-validator.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  validateForm: FormGroup;


  constructor(private form: FormBuilder) {
  	this.validateForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('',[Validators.required,CustomValidators.vaildEmail]),
      'age': new FormControl('',[Validators.required,CustomValidators.age]),
      'address': new FormGroup({
        'country': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required)
      })
    });
  }


  register(validateForm: NgForm) {
    console.log('Registration successful.');
    console.log(validateForm.value);
    alert("Hi "+validateForm.value.name+" you information are valid.")
  }
}
