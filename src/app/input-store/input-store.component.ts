import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, IProduct } from '../data/product';

@Component({
  selector: 'app-input-store',
  templateUrl: './input-store.component.html',
  styleUrls: ['./input-store.component.css']
})
export class InputStoreComponent implements OnInit {

  public products:Product[] = [
    new Product("AA",123,"AA"),
    new Product("ZZ",123,"ZZ"),
    new Product("EE",123,"EE")
  ];
  public selectedProducts:Product[] = [];

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

  onElemClicked(product:Product){
    if(this.selectedProducts.find(p => p.id == product.id))
        this.selectedProducts.splice(this.selectedProducts.findIndex(p => p.id == product.id),1)
    else
        this.selectedProducts.push(product);
  }

  getProductClass(product:Product){
    return (this.selectedProducts.find(p => p.id == product.id)) ? "highlightElem":"";
  }

}
