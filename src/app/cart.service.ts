import { Injectable } from '@angular/core';
import {product} from './product';
import {CartItem} from './cartItem';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
declare var $: any;
@Injectable() 

export class CartService{ 
  cart:CartItem[]=[];	
  dialog:product=null;
  constructor() {
		this.cart=this.getCart();
	};
  addToCart(productDetail:product , quantity:string){
  	this.cart=this.getCart();
  	let index=this.checkProduct(productDetail.id);
  	if(index==-1){
			let cardItem = new CartItem(productDetail, Number(quantity));
			//cardItem.func_log();
  		this.cart.push(cardItem);	
  	}else{
  		this.cart[index].quantity+=Number(quantity);
  	}
  	this.saveCart();
    this.dialog=productDetail;
    $(".dialog-box").addClass('is-active');
    setTimeout(function(){
      var isHovered = $('.dialog-box').is(":hover");
      if(!isHovered){
        $(".dialog-box").removeClass('is-active');
      }else{
        $(".dialog-box").mouseout(function(){
          $(".dialog-box").removeClass('is-active');
        });
      }
    }, 1000);
  }
  saveCart(){
  	sessionStorage.cart=JSON.stringify(this.cart);
  }
  getCart(){
  	if(sessionStorage.cart){
  		return JSON.parse(sessionStorage.cart)
  	}else{
  		return [];
  	}
  }
  checkProduct(id:number):number{
  	let cart=this.getCart();
  	for (var i in cart) {
		if(cart[i].product.id===id){
			return Number(i);
		}
	}
  	return -1;
  }
  getCartItem(id:number):CartItem{
  	let index=this.checkProduct(id);
  	if(index!==-1){
  		return this.getCart()[index];
  	}
  	return null;
  }
  totalCart():number{
  	let cart=this.getCart();
  	let total=0;
  	for (let item of cart){
  		total+=item.product.price*item.quantity;
  	}
  	return total;
  }
  countCart():number{
  	let cart=this.getCart();
  	let count=0;
  	for (let item of cart){
  		count+=item.quantity;
  	}
  	return count;
  }
  deleteCartItem(id){
    console.log('delete');
  	let cart=this.getCart();
  	let index=this.checkProduct(id);
  	if(index!==-1){
  		cart.splice(index,1);
      this.cart=cart;
  	}
  	this.saveCart();
    console.log('delete'+ id);
  }
}
