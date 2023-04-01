import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployessDetailsComponent } from './components/employess-details/employess-details.component';
import { EmployessListComponent } from './components/employess-list/employess-list.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  {path : 'employees-list', component:EmployessListComponent},
  {path:'employess-details', component:EmployessDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
