import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common'; // chua json
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { Stock } from '../model/stock';



let counter = 1;


@Component({
  selector: 'app-create-stock-react',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './create-stock-react.html',
  styleUrl: './create-stock-react.css',
})

export class CreateStockReact {
  //public nameControl = new FormControl('');
  // public stockForm: FormGroup = new FormGroup({
  //   nameControl: new FormControl(null, Validators.required),
  //   codeControl: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  //   priceControl: new FormControl(0, [Validators.required, Validators.min(0)] ),
  // });
  private stock: Stock;
  public stockForm!: FormGroup;

  get name(){return this.stockForm.get('nameControl');}
  get price(){return this.stockForm.get('priceControl');}
  get code(){return this.stockForm.get('codeControl');}

  constructor(private fb: FormBuilder){
    this.createForm();
    this.stock = new Stock('Test' + counter++, 'TST', 20, 10, 'NADAQ');
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)] ), 

  })
  }
  public onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value)
    console.log('Stock Form value',this.stock);
  }
  resetForm() {
    this.stockForm.reset(); // Hàm reset() có sẵn của FormGroup
  }
  loadStockFromServer() {
    this.stock = new Stock('Test' + counter++, 'TST', 20, 10, 'NADAQ');
    // let stockFormModel = Object.assign({}, this.stock);
    //  delete stockFormModel.previousPrice;
    //  delete stockFormModel.favorite;
    //map lại
    this.stockForm.setValue({
      name: this.stock.name,
      code: this.stock.code,
      price: this.stock.price
    });
  }
  pathStockForm() {
    this.stock = new Stock(`Test ${counter++}`, 'TST', 20, 10, 'NADAQ');
    this.stockForm.patchValue(this.stock);
  }
}
