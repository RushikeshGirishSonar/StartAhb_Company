package com.springio.doctor_achievements_platform.repository;

import com.springio.doctor_achievements_platform.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
