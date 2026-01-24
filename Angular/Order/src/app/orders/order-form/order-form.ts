import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrderService } from '../order.service';
import { Order, OrderStatus } from '../order.model';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order-form.html',
  styleUrls: ['./order-form.css'],
})

export class OrderForm {

  id?: number;
  isEdit = false;
  orderStatuses = Object.values(OrderStatus);

  order: Order = {
    productName: '',
    quantity: 1,
    price: 0,
    deliveryAddress: '',
    status: OrderStatus.PLACED
  };

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEdit = true;
      this.orderService.getById(this.id).subscribe(order => {
        this.order = {
          productName: order.productName,
          quantity: order.quantity,
          price: order.price,
          deliveryAddress: order.deliveryAddress,
          status: order.status
        };
      });
    }
  }

  saveOrder(): void {
    const payload = {
      productName: this.order.productName,
      quantity: this.order.quantity,
      price: this.order.price,
      deliveryAddress: this.order.deliveryAddress,
      status: this.order.status
    };

    if (this.isEdit && this.id) {
      this.orderService.update(this.id, payload).subscribe(() => {
        this.router.navigate(['/orders']);
      });
    } else {
      this.orderService.create(payload).subscribe(() => {
        this.router.navigate(['/orders']);
      });
    }
  }
}
