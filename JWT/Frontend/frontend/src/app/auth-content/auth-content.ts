import { Component } from '@angular/core';
import { AxiosService } from '../service/axios';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth-content',
  imports: [CommonModule],
  templateUrl: './auth-content.html',
  styleUrl: './auth-content.css',
})
export class AuthContent {

  data: string[] = [];

  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
  }
}
