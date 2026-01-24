import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { User } from '../Model/User';
import { UserService } from '../service/user';

@Component({
  selector: 'app-student-form',
  imports: [MatFormFieldModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnInit {

  user: User = { name: '', email: '', mobile: '' };
  users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    this.service.getUsers().subscribe(data => this.users = data);
  }

}
