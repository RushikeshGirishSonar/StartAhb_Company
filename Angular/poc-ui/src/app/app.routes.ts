import { Routes } from '@angular/router';
import { UserComponent } from './user-component/user-component';
import { StudentForm } from './student-form/student-form';

export const routes: Routes = [
    {
        path: 'get-users',
        component: StudentForm,
        pathMatch: 'full'
    },
    {
        path: '',
        component: UserComponent,
        pathMatch: 'full'
    }
];
