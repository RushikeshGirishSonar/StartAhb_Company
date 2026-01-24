package com.company.Order.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@JsonIgnoreProperties(value = {"user"}, allowSetters = false)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name", nullable = false, length = 100)
    private String customerName;

    @Column(name = "product_name", nullable = false, length = 100)
    private String productName;

    @Column(nullable = false)
    @Min(value = 1, message = "Quantity must be at least 1")
    private int quantity;

    @Column(nullable = false)
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    private double price;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    @Column(name = "total_amount")
    private BigDecimal totalAmount;

    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

}
