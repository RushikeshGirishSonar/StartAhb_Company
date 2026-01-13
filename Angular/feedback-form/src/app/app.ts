import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,FeedbackComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('feedback-form');
}