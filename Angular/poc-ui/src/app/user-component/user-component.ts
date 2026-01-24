import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../service/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-component',
  imports: [FormsModule, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit {

  btnclick() {
    console.log('Button clicked');
  }

  user: User = { name: '', email: '', mobile: '' };
  users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  submit() {
    console.log('Submitting user:', this.user);
    this.service.saveUser(this.user).subscribe(() => {
      alert('User saved');
      this.fetchUsers();
      this.user = { name: '', email: '', mobile: '' };
    });
  }

  fetchUsers() {
    this.service.getUsers().subscribe(data => this.users = data);
  }
}
