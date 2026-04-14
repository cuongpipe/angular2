import { Component} from '@angular/core';
import { FormsModule , NgForm } from '@angular/forms';
import { Stock } from '../model/stock';
import { JsonPipe } from '@angular/common'; // chua json
import { CommonModule } from '@angular/common'; // chua ng for if, class style
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-stock',

  
  imports: [FormsModule, JsonPipe , CommonModule],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  //event blindigng
  @Output() stockCreated = new EventEmitter<Stock>();
  //stock Created là biến và  là tên của event (sự kiện) để cha theo dõi
  //eventemmiiter là class gửi dữ liệu và kiểu dữ liệu gửi đi là stock;
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  
  constructor(){
    this.stock = new Stock('test', '', 0, 0, 'NADAQ');
  }
  setStockPrice(price: number){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  confirm(){
    this.confirmed = true;
  }
  createStockk(stockForm: NgForm){
    console.log('Stock form', this.stock);


    if(stockForm.valid){   
    //  this.stockCreated.emit(Object.assign({}, this.stock));
      
      
      // map lại để gửi cho stocklist
      const mappedStock = new Stock(
        this.stock.name,
        this.stock.code,
        this.stock.price,
        this.stock.previousPrice,
        this.stock.exchange
      );
  
      // Vì favorite không nằm trong constructor nên gán riêng
      mappedStock.favorite = this.stock.favorite;
  
      // PHÁT TÍN HIỆU: Gửi cái đã được map đi
      this.stockCreated.emit(mappedStock);

      console.log('Creating stock', this.stock);
      this.confirm();
      this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      
    }
    else{
      console.log('Stock Form is invalid')
    }
  }

}
