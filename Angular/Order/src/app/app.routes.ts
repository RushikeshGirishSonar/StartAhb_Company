import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { OrderForm } from './orders/order-form/order-form';
import { authGuard } from './auth/auth-guard';
import {OrderList } from './orders/order-list/order-list';
import { UpdateOrder } from './update-order/update-order';
import { Register } from './auth/register/register';

export const routes: Routes = [
  { 
    path: 'login',
    component: Login 
  },

  { 
    path: 'register', 
    component: Register

  },

  { 
    path: 'orders/edit/:id', 
    component: UpdateOrder 
  },

  {
    path: 'orders',
    component: OrderList,
    canActivate: [authGuard]
  },

  {
    path: 'orders/new',
    component: OrderForm,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // { path: '**', redirectTo: 'login' },


];
