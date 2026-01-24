import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AuthContent } from './auth-content/auth-content';
import { Content } from './content/content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Header,Content, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
