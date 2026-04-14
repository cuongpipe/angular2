import { Component, OnInit} from '@angular/core';
import { Stock } from '../model/stock';
import { Input } from '@angular/core'; // Import Input
import { CommonModule } from '@angular/common';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
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
  @Output() toggleFavorite = new EventEmitter<Stock>();
  @Output() deleteStock = new EventEmitter<Stock>();
  @Output() updateStock = new EventEmitter<Stock>();
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
  onToggleFavorite(event: Event) {
    this.toggleFavorite.emit(this.stock);
  }
  onDeleteStock(event: Event) {
    const isConfirm = confirm('Bạn có chắc muốn xoá "' + this.stock.code + '" không?');
    if(isConfirm ) {
      this.deleteStock.emit(this.stock);
    }
  }
  onUpdateStock(event: Event) {
    this.updateStock.emit(this.stock);
  }
}
