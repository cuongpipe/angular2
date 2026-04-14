import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable, of, throwError } from 'rxjs';

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
  getStocks(): Observable<Stock[]>{
    return of(this.stocks);
  }
  createStock(stock: Stock): Observable<any>{

    const foundStock = this.stocks.find(s => s.code === stock.code);
     // nếu tìm thấy mã cổ phiếu trong danh sách cổ phiếu thì foundStock sẽ trả về luôn cổ phiếu đc tìm thấy
    // kiểm tra xem mã cổ phiếu đã tồn tại trong stock hay chưa
    if(foundStock){
      return throwError(() => 'Stock with code'+ stock.code + 'already exists');
    }
    this.stocks.push(stock);
    return of({msg: 'Stock with code ' + stock.code + ' created'});
  }
  toggleFavorite(stock: Stock): Observable<Stock>{
    const foundStock = this.stocks.find(s => s.code === stock.code);
    // nếu tìm thấy mã cổ phiếu trong danh sách cổ phiếu thì foundStock sẽ trả về luôn cổ phiếu đc tìm thấy
    if(!foundStock){
      return throwError(() => new Error('Stock not found'));
    }
    if (foundStock.favorite === true) {
      foundStock.favorite = false;
    } 
    else {
      foundStock.favorite = true;
    }
    return of(foundStock);
  }
  deleteStock(stock: Stock): Observable<Stock[]>{
    const foundStockindex = this.stocks.findIndex(s => s.code === stock.code);
    //nếu tìm thấy thì trả về thứ tự của cổ phiếu trong mảng
    if(foundStockindex >= 0){
      this.stocks.splice(foundStockindex, 1);
      //1 ở đây là xoá 1 cổ phiếu
    }
    else{
      return throwError(() => new Error('Stock not found'));
    }
    return of(this.stocks);
  }
  updateStock(stock: Stock): Observable<Stock>{
    const foundStockindex = this.stocks.findIndex(s => s.code === stock.code);
    if(foundStockindex >= 0){
      this.stocks[foundStockindex] = stock;
    }
    else{
      return throwError(() => new Error('Stock not found'));
    }
    return of(stock);
  }
}
