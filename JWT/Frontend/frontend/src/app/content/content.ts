import { Component } from '@angular/core';
import { WelcomeContent } from "../welcome-content/welcome-content";
import { LoginForm } from "../login-form/login-form";
import { AxiosService } from '../service/axios';

@Component({
  selector: 'app-content',
  imports: [WelcomeContent, LoginForm],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

  constructor(private axiosService: AxiosService) { }

  onSubmitLogin(input: any): void{
    console.log("Login form submitted with:", input);
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    );
    
  }

  onSubmitRegister(input: any): void{
    console.log("Register form submitted with:", input);
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstname: input.firstname,
        lastname: input.lastname,
        login: input.login,
        password: input.password
      }
    );
  }
}