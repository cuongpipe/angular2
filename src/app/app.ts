import { Component, signal } from '@angular/core';
//import { StockItems } from './stock-items/stock-items';
//import { CreateStock } from './create-stock/create-stock';
import { CreateStockReact } from './create-stock-react/create-stock-react';
import { StockList } from './stock-list/stock-list';
@Component({
  selector: 'app-root',
  imports: [CreateStockReact, StockList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Stock Market App';
  //protected readonly title = signal('stock-market');
} 