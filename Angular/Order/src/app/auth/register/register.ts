import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  register(): void {
    this.auth.register(this.user).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed');
      }
    });
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
