import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Order, OrderStatus } from '../orders/order.model';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update-order.html',
  styleUrls: ['./update-order.css'],
})
export class UpdateOrder implements OnInit {

  id?: number;
  isEdit = false;
  orderStatuses = Object.values(OrderStatus);

  order: Order = {
    id: 0,
    customerName: '',
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
    // Check if we have an ID in the route
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.isEdit = true;

        // Fetch order by ID
        this.orderService.getById(this.id).subscribe({
          next: (data) => this.order = data,
          error: (err) => {
            console.error('Failed to load order', err);
            alert('Failed to load order.');
            this.router.navigate(['/orders']);
          }
        });
      }
    });
  }

  updateOrder(): void {
    if (this.isEdit) {
      this.orderService.update(this.id!, this.order).subscribe(() => {
        if (typeof window !== 'undefined') {
          alert('Order updated');
        }
        this.router.navigate(['/orders']);
      });
    } else {
      this.orderService.create(this.order).subscribe(() => {
        alert('Order created');
        this.router.navigate(['/orders']);
      });
    }
  }

}
