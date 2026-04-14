import { Routes } from '@angular/router';
import { StockList } from './stock-list/stock-list';
import { CreateStock } from './create-stock/create-stock';

export const routes: Routes = [
    {path: 'stocks', component: StockList},
    {path: 'create', component: CreateStock},
    {path: '', redirectTo: '/stocks', pathMatch: 'full'}
];
