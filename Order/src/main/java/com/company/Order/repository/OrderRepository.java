package com.company.Order.repository;

import com.company.Order.Entity.Order;
import com.company.Order.Entity.OrderStatus;
import com.company.Order.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByStatus(OrderStatus status);

    List<Order> findByUser(User user);

    @Query("SELECT o FROM Order o WHERE o.totalAmount > :amount")
    List<Order> findOrdersAboveAmount(@Param("amount") BigDecimal amount);

}
