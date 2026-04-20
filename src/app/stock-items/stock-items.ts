import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../model/stock';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-stock-items]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-items.html',
  styleUrls: ['./stock-items.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItems {
  @Input() public stock!: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock> = new EventEmitter<Stock>();
  @Output() private deleteStock: EventEmitter<Stock> = new EventEmitter<Stock>();
  @Output() private updateStock: EventEmitter<Stock> = new EventEmitter<Stock>();
  @Output() private viewDetails: EventEmitter<Stock> = new EventEmitter<Stock>();

  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }

  onDelete() {
    this.deleteStock.emit(this.stock);
  }

  onUpdate() {
    this.updateStock.emit(this.stock);
  }

  onView() {
    this.viewDetails.emit(this.stock);
  }

  isPositive(): boolean {
    return this.stock.price > this.stock.previousPrice;
  }
}
