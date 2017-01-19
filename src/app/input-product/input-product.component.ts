import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, IProduct } from '../data/product';

@Component({
  selector: 'app-input-product',
  templateUrl: './input-product.component.html',
  styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Event emitter from angular, templated on string (can only emit string)
  @Output() onSubmit = new EventEmitter();

  submitSelectedProduct(name: string, price:string, type:string){
    let product:IProduct = new Product(name, Number.parseInt(price), type);
    this.onSubmit.emit(product);
  }

}
