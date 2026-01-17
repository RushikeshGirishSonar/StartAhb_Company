package com.Backend.Frontend_Connection.Service;

import java.util.List;
import com.Backend.Frontend_Connection.Entity.User;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
}
