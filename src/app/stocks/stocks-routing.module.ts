import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksComponent } from './stocks.component';

const routes: Routes = [
  { path: '', component: StocksComponent },
  {path : 'stock-list', component:StockListComponent},
  {path:'stock-details', component:StockDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
