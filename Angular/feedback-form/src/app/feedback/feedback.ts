import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    
    this.feedbackForm = this.fb.group({
      rating: ['', Validators.required],
      comments: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  
  get f() {
    return this.feedbackForm.controls;
  }

  
  onSubmit() {
    if (this.feedbackForm.valid) {
      
      console.log('Feedback submitted:', this.feedbackForm.value);
      this.isSubmitted = true;
    } else {
      
      this.feedbackForm.markAllAsTouched();
    }
  }
}