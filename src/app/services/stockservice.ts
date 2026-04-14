import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
@Injectable({
  providedIn: 'root',
})
export class Stockservice {
  private stocks: Stock[];
  constructor(){
    this.stocks = [
      new Stock('Test Stock Compay', 'TSC', 37, 36,'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 37, 38, 'NSE'),
      new Stock('last Stock Company', 'LSC', 37, 39, 'NYSE')
    ]
  }
  getStocks(): Stock[]{
    return this.stocks;
  }
  createStock(stock: Stock){

    let foundStock = this.stocks.find(s => s.code === stock.code);
     // nếu tìm thấy mã cổ phiếu trong danh sách cổ phiếu thì foundStock sẽ trả về luôn cổ phiếu đc tìm thấy
    // kiểm tra xem mã cổ phiếu đã tồn tại trong stock hay chưa
    if(foundStock){
      return false;
    }
    this.stocks.push(stock);
    return true;
  }
  toggleFavorite(stock: Stock){
    let foundStock = this.stocks.find(s => s.code === stock.code);
    // nếu tìm thấy mã cổ phiếu trong danh sách cổ phiếu thì foundStock sẽ trả về luôn cổ phiếu đc tìm thấy
    if(foundStock){
      // Viết kiểu IF (dài dòng hơn)
      if (foundStock.favorite === true) {
        foundStock.favorite = false;
      } 
      else {
        foundStock.favorite = true;
      }
    }
  }


}
