import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { StockItems } from '../stock-items/stock-items';
import { Stockservice } from '../services/stockservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, StockItems, FormsModule],
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.css'],
})
export class StockList implements OnInit {
  public stocks!: Stock[];
  public searchTerm: string = '';
  selectedStock: Stock | null = null;
  isUpdateOpen = false;
  isDetailOpen = false;

  constructor(private stockService: Stockservice) {}

  ngOnInit() {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getStocks().subscribe((stocks) => {
      this.stocks = stocks;
    });
  }

  search() {
    if (this.searchTerm.trim() === '') {
      this.loadStocks();
    } else {
      this.stockService.searchStocks(this.searchTerm).subscribe((stocks) => {
        this.stocks = stocks;
      });
    }
  }

  onNewStock(receivedStock: Stock) {
    this.stocks.push(receivedStock);
  }

  onToggleFavorite(stock: Stock) {
    this.stockService.toggleFavorite(stock).subscribe(() => this.loadStocks());
  }

  onDeleteStock(stock: Stock) {
    this.stockService.deleteStock(stock).subscribe(() => this.loadStocks());
  }

  onUpdateStock(stock: Stock) {
    this.isDetailOpen = false;
    this.isUpdateOpen = true;
    this.selectedStock = {
      name: stock.name,
      code: stock.code,
      price: stock.price,
      exchange: stock.exchange,
      previousPrice: stock.previousPrice
    };
  }

  onViewDetails(stock: Stock) {
    this.isUpdateOpen = false;
    this.isDetailOpen = true;
    this.selectedStock = {
      name: stock.name,
      code: stock.code,
      price: stock.price,
      exchange: stock.exchange,
      previousPrice: stock.previousPrice
    };
  }

  saveStock() {
    if (!this.selectedStock) return;
  
    this.stockService.updateStock(this.selectedStock)
      .subscribe(() => {
        this.loadStocks();
        this.closeDialog();
      });
  }

  closeDialog() {
    this.isDetailOpen = false;
    this.isUpdateOpen = false;
    this.selectedStock = null;
  }


}
