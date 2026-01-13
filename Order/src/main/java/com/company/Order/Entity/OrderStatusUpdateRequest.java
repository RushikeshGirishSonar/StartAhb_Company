package com.company.Order.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class OrderStatusUpdateRequest {
    private OrderStatus status;
}
