package com.springio.doctor_achievements_platform.controller;

import com.springio.doctor_achievements_platform.entity.Doctor;
import com.springio.doctor_achievements_platform.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    @GetMapping
    public List<Doctor> getDoctors() {
        return doctorService.getAllDoctors();
    }

}
