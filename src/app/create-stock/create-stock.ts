import { Component } from '@angular/core';
import { FormsModule , NgForm } from '@angular/forms';
import { Stock } from '../model/stock';
import { JsonPipe } from '@angular/common'; // chua json
import { CommonModule } from '@angular/common'; // chua ng for if, class style
@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [FormsModule, JsonPipe , CommonModule],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
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
      console.log('Creating stock', this.stock);
      this.confirm();
    }else{
      console.log('Stock Form is invalid')
    }
  }

}
