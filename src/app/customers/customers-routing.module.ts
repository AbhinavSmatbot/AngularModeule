import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {path: '', component: CustomersComponent },
  {path:'customer-list',component:CustomerListComponent},
  {path:'customer-details/:id',component:CustomerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
