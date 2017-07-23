import { NgModule, Component } from '@angular/core';
import { CalculatorComponent } from './calculator.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  rForm: FormGroup;
  post: any;
  firstName: string = '';
  lastName: string = '';
  annualSalary: number = 0;
  superRate: number = 0;
  paymentStartDate: any;

  titleAlert:string = 'This field is required';
  titleAlertSalary:string = 'Salary must be between 0-999999';
  titleAlertSuper:string = 'Super must be between 0-100'

  /**
   * This will build my form
   * 
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder) {

    this.rForm = formBuilder.group({
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        // Not too sure how to validate 6 digit number yet. Going with this for now
        'annualSalary': [null, Validators.compose([Validators.required, Validators.pattern('(?:[1-9][0-9]?[0-9]?[0-9]?[0-9]?[0-9]?)')])],
        // Not too sure how to validate 0~100% yet. Going with this for now
        'superRate': [null, Validators.compose([Validators.required, Validators.pattern('(?:[1-9][0-9]?|100)')])],
        'paymentStartDate': [null, Validators.required]
    });

  }

  /**
   * This will handle the form submission
   *
   * @param post my submitted form
   */
  addPost(post) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.annualSalary = post.annualSalary;
    this.superRate = post.superRate;
    this.paymentStartDate = post.paymentStartDate;
  }


}
