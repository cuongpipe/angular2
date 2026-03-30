import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-stock-items',
  imports: [],
  templateUrl: './stock-items.html',
  styleUrl: './stock-items.css',
})
export class StockItems implements OnInit{

  public stock!: Stock;
  constructor(){

  }
  ngOnInit(){
    this.stock = new Stock('Apple', 'AAPL', 100, 80, 'NASDAQ');
  }
  addToFavorite(){
    console.log('Add to favorite');
    this.stock.favorite = !this.stock.favorite;
  }
}
