import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployessListComponent } from './components/employess-list/employess-list.component';
import { EmployessDetailsComponent } from './components/employess-details/employess-details.component';
import { compileClassMetadata } from '@angular/compiler';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployessListComponent,
    EmployessDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
