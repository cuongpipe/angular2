import { Component, signal } from '@angular/core';
import { StockItems } from './stock-items/stock-items';
import { CreateStock } from './create-stock/create-stock';

@Component({
  selector: 'app-root',
  imports: [StockItems, CreateStock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-market');
} 