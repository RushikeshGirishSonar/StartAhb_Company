import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';

export const routes: Routes = [
    { path: '', redirectTo: 'create-doctor', pathMatch: 'full' },  // default route
  { path: 'create-doctor', component: CreateDoctorComponent },
  { path: 'dashboard', component: DashboardComponent }
];
