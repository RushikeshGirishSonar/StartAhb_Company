package com.company.Order.controller;

import com.company.Order.Entity.Order;
import com.company.Order.Entity.OrderStatusUpdateRequest;
import com.company.Order.Entity.User;
import com.company.Order.repository.OrderRepository;
import com.company.Order.repository.UserRepository;
import com.company.Order.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    private final OrderService orderService;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderController(
            OrderService orderService,
            OrderRepository orderRepository,
            UserRepository userRepository
    ) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    // create order
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.createOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }

    // show all orders
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {

        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // get order by id
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }

    // update the order
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(
            @PathVariable Long id,
            @RequestBody Order order) {

        return ResponseEntity.ok(orderService.updateOrder(id, order));
    }

    // delete the order
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id)
    {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    //update order status
    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateOrderStatus(
            @PathVariable Long id,
            @RequestBody OrderStatusUpdateRequest request) {

        orderService.updateOrderStatus(id, request.getStatus());
        return ResponseEntity.ok("Order status updated successfully");
    }

    @GetMapping("/amount/{amount}")
    public ResponseEntity<List<Order>> getOrdersAboveAmount(
            @PathVariable BigDecimal amount) {

        return ResponseEntity.ok(orderService.getOrdersAboveAmount(amount));
    }

    @GetMapping("/my")
    public ResponseEntity<List<Order>> getMyOrders() {

        String username = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username).get();

        return ResponseEntity.ok(orderRepository.findByUser(user));
    }


}
