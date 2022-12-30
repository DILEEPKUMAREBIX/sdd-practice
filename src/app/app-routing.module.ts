import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employee/create',
    component: EmployeeCreateComponent
  },
  {
    path: 'employee/update/:id',
    component: EmployeeCreateComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  { path: '', redirectTo: '/employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
