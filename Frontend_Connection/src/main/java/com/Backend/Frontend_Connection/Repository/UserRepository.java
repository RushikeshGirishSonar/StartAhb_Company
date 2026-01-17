package com.Backend.Frontend_Connection.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Backend.Frontend_Connection.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
