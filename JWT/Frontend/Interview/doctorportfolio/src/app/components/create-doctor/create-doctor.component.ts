import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../model/doctor';
import { DoctorService } from '../../service/doctor-service';

@Component({
  selector: 'app-create-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.css']
})
export class CreateDoctorComponent {

  doctor: Doctor = {
    name: '',
    specialization: '',
    hospital: '',
    experience: 0,
    bio: ''
  };

  constructor(private doctorService: DoctorService) {}

  submitDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe(() => {
      alert('Doctor added successfully!');
      this.resetForm();
    });
  }

  resetForm() {
    this.doctor = {
      name: '',
      specialization: '',
      hospital: '',
      experience: 0,
      bio: ''
    };
  }
}
