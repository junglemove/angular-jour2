import { Component, Input } from '@angular/core'
import { Foo } from './DIFail/fail'
import { Order } from './data/order'
import { Product, IProduct } from './data/product'
import { Restaurant } from './data/restaurant'
import { Store } from './data/store'

//var fail  = new Foo()



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	private products:Product[];

	message = 'Bonjour !'
	mySize = 42
	order = new Order('order 1', [new Product('name', 42)], this.onOrder)
	store = new Store()
	restaurant = new Restaurant(this.store)

	onOrder(order: Order, isReady: boolean, message: string){
		console.log('onOrder', order, isReady, message)
	}

	onAddProduct(product:IProduct){
		this.products.push(product);
		console.log("****** HANDLED BY app-component *******");
		for(var i=0; i<this.products.length ; i++){
			console.log("Name: "+ this.products[i].name);
		}
	}

	onClick(value: string){
		this.store.addProducts(this.order.products)
		this.restaurant.passOrder(this.order)
		console.log('input value', value)
		this.mySize += 10
	}

}
