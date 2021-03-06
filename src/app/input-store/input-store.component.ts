import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, IProduct } from '../data/product';

@Component({
  selector: 'app-input-store',
  templateUrl: './input-store.component.html',
  styleUrls: ['./input-store.component.css']
})
export class InputStoreComponent implements OnInit {

  private bindTest = "test with binding";
  private lastSelectedProduct:Product = new Product("newProduct",123,"TYPE");

  private products:Product[] = [
    new Product("AA",123,"AA"),
    new Product("ZZ",123,"ZZ"),
    new Product("EE",123,"EE")
  ];
  private selectedProducts:Product[] = [];

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
    else{
        this.selectedProducts.push(product);
        this.lastSelectedProduct = product;
    }
  }

  getProductClass(product:Product){
    return (this.selectedProducts.find(p => p.id == product.id)) ? "highlightElem":"";
  }

  clearAll(){
    this.products = [];
  }

  clearSelection(){
    this.selectedProducts = [];
  }

  removeSelected(){
      for(let i=0; i<this.selectedProducts.length; i++){
        let product = this.selectedProducts[i];
        this.products.splice(this.products.findIndex(p => p.id == product.id),1);
      }
  }

}
