import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../data/product';

@Component({
  selector: 'app-input-product',
  templateUrl: './input-product.component.html',
  styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit {

  private products:Product[] = [];

  @Input() name: string;
  @Input() price: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

  //Event emitter from angular, templated on string (can only emit string)
  @Output() onSubmit = new EventEmitter()
  i = 0;

  onClick(name: string, price:string, type:string){
    this.products.push(new Product(name, Number.parseInt(price), type));
    for(var i=0; i<this.products.length ; i++){
        console.log("Name: "+ this.products[i].name);
    }
  }

}
