import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './enrollment.html',
  styleUrl: './enrollment.css',
})
export class Enrollment {

  enrollmentForm: FormGroup;

  courses = ['Java', 'Angular', 'React', 'SpringBoot' ];

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      course: ['', Validators.required]
    });
  }

  submitForm(){
    if(this.enrollmentForm.valid){
      console.log("Student Enrollemnt Data: ", this.enrollmentForm.value);
      alert("Student Enrollemnt Successful!");
      this.enrollmentForm.reset();
    }
    else{
      alert("Please fill the form correctly.");
    }
  }

}
