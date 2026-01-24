import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE } from '../core/api.constants';
import { Order } from './order.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  constructor(private http: HttpClient) { }

  getById(orderId: number) {
    return this.http.get<Order>(`${API_BASE}/api/orders/${orderId}`);
  }

  getOrders() {
    return this.http.get<Order[]>(`${API_BASE}/api/orders`);
  }
  
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_BASE + '/api/orders');
  }

  create(order: Partial<Order>) {
    return this.http.post(`${API_BASE}/api/orders`, order);
  }

  update(id: number, order: Partial<Order>) {
    return this.http.put(`${API_BASE}/api/orders/${id}`, order);
  }

  delete(orderId: number){
    return this.http.delete(`${API_BASE}/api/orders/${orderId}`);
  }

  updateStatus(orderId: number, status: string){
    return this.http.patch(`${API_BASE}/api/orders/${orderId}/status`, { status });
  }

  getMyOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(`${API_BASE}/api/orders/my`);
}

}
