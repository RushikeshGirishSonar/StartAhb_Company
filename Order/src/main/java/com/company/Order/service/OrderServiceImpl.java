package com.company.Order.service;

import com.company.Order.Entity.Order;
import com.company.Order.Entity.OrderStatus;
import com.company.Order.Entity.User;
import com.company.Order.repository.OrderRepository;
import com.company.Order.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderServiceImpl(OrderRepository orderRepository, UserRepository userRepository) {

        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Order createOrder(Order order) {

        // ✅ Get logged-in username from JWT
        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();


        String username = auth.getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // ✅ Attach user to order
        order.setUser(user);

        // ❌ DO NOT accept customerName from client
        order.setCustomerName(user.getUsername());

        if (order.getQuantity() <= 0) {
            throw new RuntimeException("Quantity must be greater than zero");
        }

        if (order.getTotalAmount() == null) {
            order.setTotalAmount(
                    BigDecimal.valueOf(order.getQuantity() * order.getPrice())
            );
        }

        return orderRepository.save(order);
    }


    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
    }

    @Override
    public Order updateOrder(Long id, Order order) {
        Order existingOrder = getOrderById(id);

        existingOrder.setCustomerName(existingOrder.getUser().getUsername());
        existingOrder.setProductName(order.getProductName());
        existingOrder.setQuantity(order.getQuantity());
        existingOrder.setPrice(order.getPrice());
        existingOrder.setStatus(order.getStatus());

        return orderRepository.save(existingOrder);
    }

    @Override
    public void updateOrderStatus(Long id, OrderStatus status) {

        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setStatus(status);
        orderRepository.save(order);
    }

    @Override
    public List<Order> getOrdersAboveAmount(BigDecimal amount) {
        return orderRepository.findOrdersAboveAmount(amount);
    }

    @Override
    public void deleteOrder(Long id) {
        if (!orderRepository.existsById(id)) {
            throw new RuntimeException("Order not found with id: " + id);
        }
        orderRepository.deleteById(id);
    }

}
