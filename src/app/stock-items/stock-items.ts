import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { Input } from '@angular/core'; // Import Input
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stock-items',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './stock-items.html',
  styleUrl: './stock-items.css',
})
export class StockItems implements OnInit{
  //Property Binding (binding thuộc tính)
  @Input() stock!: Stock; // ở cha k có gì thêm nưã - biến này dùng để nhận giá trị từ chà truyền vào
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
  // onToggleFavorite() {
  //   console.log('Toggle favorite for stock:' , stock, 'was triggered');
  //   stock.favorite = !stock.favorite;
  // }
  onToggleFavorite(event: Event){
    console.log('Toggle favorite for stock:' , this.stock, 'was triggered');
  }
}
