import {product} from './product';
export class CartItem{
	public product:product;
	public quantity;
	constructor(product: product, quantity:number){
		this.product = product;
		this.quantity = quantity;
	}
	// func_log(){
	// 	console.log(typeof this.quantity);
		
	// }
}