import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, IProduct } from '../data/product';

@Component({
  selector: 'app-input-store',
  templateUrl: './input-store.component.html',
  styleUrls: ['./input-store.component.css']
})
export class InputStoreComponent implements OnInit {

  public products:Product[] = [];

  constructor() { }

  ngOnInit() {
  }

	onAddProduct(product:IProduct){
		this.products.push(product);
		console.log("****** HANDLED BY input-store *******");
		for(var i=0; i<this.products.length ; i++){
			console.log("Name: "+ this.products[i].name);
		}
	}

}
