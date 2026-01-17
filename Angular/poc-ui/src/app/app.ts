import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user-component/user-component';

@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet, 
    HttpClientModule, 
    FormsModule, 
    MatFormFieldModule,
    UserComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('poc-ui');
}
