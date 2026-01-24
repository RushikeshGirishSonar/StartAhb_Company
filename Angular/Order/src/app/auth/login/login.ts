import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string | undefined;

  loginData = {
    username: '',
    password: ''
  };

  constructor(
    private Auth: Auth,
    private router: Router
  ) {}

  login() {
    // Implement login logic here
    this.Auth.login(this.loginData).subscribe({
      next: (response: any) => {
        this.Auth.saveToken(response.token);
        // Redirect to dashboard or home page
        this.router.navigate(['/orders']);
      },
      error: () => {
        console.error('Login failed');
        this.errorMessage = 'Invalid username or password';
        alert(this.errorMessage);
      }
    });

  }

  register() {
    this.router.navigate(['/register']);
  }
}
