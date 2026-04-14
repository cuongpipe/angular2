import { Component} from '@angular/core';
import { FormsModule , NgForm } from '@angular/forms';
import { Stock } from '../model/stock';
import { JsonPipe } from '@angular/common'; // chua json
import { CommonModule } from '@angular/common'; // chua ng for if, class style
import { Stockservice } from '../services/stockservice';
@Component({
  selector: 'app-create-stock',
  imports: [FormsModule, JsonPipe , CommonModule],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  //event blindigng
  //stock Created là biến và  là tên của event (sự kiện) để cha theo dõi
  //eventemmiiter là class gửi dữ liệu và kiểu dữ liệu gửi đi là stock;
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  public message: string = ''; 
  constructor(private stockService: Stockservice){
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
      this.stockService.createStock(this.stock).subscribe((created) => {
        if(created){
          this.message = 'Stock Created with code: ' + this.stock.code;
          this.stock = new Stock('', '', 0, 0, 'NASDAQ');
        }
        else{
          this.message = 'Stock Code '  + this.stock.code + ' already exists';
        }
      });
    }
  }
}
