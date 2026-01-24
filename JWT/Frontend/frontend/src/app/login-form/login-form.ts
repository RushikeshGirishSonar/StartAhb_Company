import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {

  @Output() onSubmitLoginEvent = new EventEmitter();
  //this way, the submit method will be in the content component, in the parent component
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstname: string = "";
  lastname: string = "";
  login: string = "";
  password: string = "";

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({
      login: this.login,
      password: this.password
    });
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      firstname: this.firstname,
      lastname: this.lastname,
      login: this.login,
      password: this.password
    });
  }
}
