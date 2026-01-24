import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../model/doctor';
import { DoctorService } from '../../service/doctor-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.css']
})
export class DashboardComponent implements OnInit {
  doctors: Doctor[] = [];  // must be array

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;  // assign array directly
      console.log('Doctors:', this.doctors);
    });
  }
}