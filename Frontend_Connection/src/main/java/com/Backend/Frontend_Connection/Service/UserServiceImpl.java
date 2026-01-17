package com.Backend.Frontend_Connection.Service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.Backend.Frontend_Connection.Entity.User;
import com.Backend.Frontend_Connection.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    public UserServiceImpl(UserRepository repo) {
        this.repo = repo;
    }

    @Override
    public User saveUser(User user) {
        return repo.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repo.findAll();
    }
}
