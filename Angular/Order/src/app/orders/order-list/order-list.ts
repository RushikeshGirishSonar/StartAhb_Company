import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.css'],
})
export class OrderList {

  orders$!: Observable<Order[]>;

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {}

  ngOnInit(): void 
  {
    this.orders$ = this.orderService.getMyOrders();
    console.log('Orders observable set:', this.orders$.subscribe(data => console.log('Loaded orders:', data)));
  }

  // 1. Separate the loading logic
  loadOrders(): void {
    this.orders$ = this.orderService.getMyOrders(); 
  }

  deleteOrder(orderId: number): void {
    if (!confirm('Are you sure you want to delete this order?')) return;

    this.orderService.delete(orderId).subscribe({
      next: () => {
        console.log('Order deleted successfully');
        // Refresh the observable stream immediately
        this.loadOrders(); 
      },
      error: (err) => {
        console.error('Delete failed', err);
        alert('Could not delete the order. Please try again.');
      }
    });
  }

  onEdit(id: number) {
    console.log('Editing order:', id);
    this.router.navigate(['/orders/edit', id]).then(success => {
      console.log('Navigation success?', success);
    }).catch(err => {
      console.error('Navigation error', err);
    });
  }

}

