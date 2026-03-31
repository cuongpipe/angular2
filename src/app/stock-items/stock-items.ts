import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { Input } from '@angular/core'; // Import Input

@Component({
  selector: 'app-stock-items',
  standalone: true, 
  imports: [],
  templateUrl: './stock-items.html',
  styleUrl: './stock-items.css',
})
export class StockItems implements OnInit{

  @Input() stock!: Stock; // ở cha k có gì thêm nưã
  constructor(){

  }
  ngOnInit(){
    
  }
  /* 
  Constructor: Là hàm khởi tạo của Class, chạy đầu tiên để nạp các Service. 
               Lúc này các biến @Input chưa có dữ liệu (thường bị undefined).
   ngOnInit: Là một Hook của Angular, chạy sau Constructor. 
             Đây là nơi dữ liệu từ cha truyền xuống qua 
            @Input đã sẵn sàng để mày sử dụng và xử lý logic */
  addToFavorite(){
    console.log('Add to favorite');
    this.stock.favorite = !this.stock.favorite;
  }
}
