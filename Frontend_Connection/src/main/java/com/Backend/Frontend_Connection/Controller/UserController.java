package com.Backend.Frontend_Connection.Controller;

import java.util.List;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import com.Backend.Frontend_Connection.Entity.User;
import com.Backend.Frontend_Connection.Service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public User saveUser(@Valid @RequestBody User user) {
        return service.saveUser(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return service.getAllUsers();
    }
}
