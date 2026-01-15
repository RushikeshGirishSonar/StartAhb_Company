import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Enrollment } from './enrollment/enrollment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Enrollment],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-enrollment');
}
