import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { StockItems } from '../stock-items/stock-items'; // Import component con
import { Stockservice } from '../services/stockservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, StockItems], // Import để sử dụng trong template
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList implements OnInit{
   public stocks!: Stock[];

  constructor(private stockService: Stockservice) {}
  ngOnInit() {
      this.stockService.getStocks().subscribe((stocks) => {
        this.stocks = stocks;
      });
  }
  onNewStock(receivedStock: Stock) {
    this.stocks.push(receivedStock); // Thêm vào mảng để hiển thị 
  }
  onToggleFavorite(stock: Stock) {
    console.log('Toggle favorite for stock:', stock, 'Was trigged');
    this.stockService.toggleFavorite(stock).subscribe((stock) => this.stockService.getStocks().subscribe(stocks => this.stocks = stocks));
  }
  onDeleteStock(stock: Stock){
    console.log('Delete stock:', stock, 'Was trigged')
    this.stockService.deleteStock(stock).subscribe((stocks) => this.stocks = stocks);
  }
  onUpdateStock(stock: Stock){
    console.log('Update stock:', stock, 'Was trigged')
    this.stockService.updateStock(stock).subscribe(() => this.stockService.getStocks().subscribe(stocks => this.stocks = stocks));
  }
}
