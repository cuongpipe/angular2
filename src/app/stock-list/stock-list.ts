import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { StockItems } from '../stock-items/stock-items'; // Import component con
import { CommonModule } from '@angular/common'; // Thêm để dùng *ngFor
import { CreateStock } from '../create-stock/create-stock';
import { Stockservice } from '../services/stockservice';
@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [StockItems, CommonModule, CreateStock], // Import để sử dụng trong template
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList {
  // Tổ chức danh sách cổ phiếu giả định
   public stocks!: Stock[];// = [
  //   new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
  //   new Stock('Second Stock Company', 'SSC', 10, 11, 'NSE'),
  //   new Stock('Last Stock Company', 'LSC', 876, 750, 'NYSE'),
  //   new Stock('My New Stock', 'MNS', 244, 200, 'NASDAQ')
  // ];
  constructor(private stockService: Stockservice) {}
  ngOnInit() {
      this.stocks = this.stockService.getStocks();
  }
  onNewStock(receivedStock: Stock) {
    this.stocks.push(receivedStock); // Thêm vào mảng để hiển thị 
  }
  onToggleFavorite(stock: Stock) {
    
  }
}
