package com.company.Order.service;


import com.company.Order.Entity.Order;
import com.company.Order.Entity.OrderStatus;

import java.math.BigDecimal;
import java.util.List;

public interface OrderService {

    Order createOrder(Order order);

    List<Order> getAllOrders();

    Order getOrderById(Long id);

    Order updateOrder(Long id, Order order);

    void updateOrderStatus(Long id, OrderStatus status);

    List<Order> getOrdersAboveAmount(BigDecimal amount);

    void deleteOrder(Long id);
}
