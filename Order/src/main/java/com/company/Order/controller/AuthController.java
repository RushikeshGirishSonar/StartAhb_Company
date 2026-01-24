package com.company.Order.controller;

import com.company.Order.DTO.AuthRequest;
import com.company.Order.Entity.User;
import com.company.Order.Utility.JwtUtil;
import com.company.Order.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final JwtUtil jwtUtil;

    private final UserRepository userRepository;

    public AuthController(JwtUtil jwtUtil, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {

        User user = userRepository.findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }

        // TEMP (PLAIN TEXT) – later replace with PasswordEncoder
        if (!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }

        String token = jwtUtil.generateToken(user.getUsername());
        return ResponseEntity.ok(Map.of("token", token));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest request) {

        // Check if username already exists
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Username already exists");
        }

        // Create new user
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword()); // ⚠ plain text (temporary)

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("User registered successfully");
    }
}
