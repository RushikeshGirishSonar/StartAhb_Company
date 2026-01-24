import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8080/api/doctors';

  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  addDoctor(doctor: Doctor) {
  return this.http.post<Doctor>(
    'http://localhost:8080/api/doctors',
    doctor
  );
}

}
