import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router ,ActivatedRoute,RouterState } from '@angular/router';
import { Location } from '@angular/common';
import { product } from '../product';
import { ProductsService }  from '../products.service';
import { CartService }  from '../cart.service';
import { UltilService } from '../ultil.service';

declare var $:any;
declare var myExtObject:any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:product;
  num:number=1;
  @ViewChild("quantity") public quantity:ElementRef;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
  	private location:Location,
  	private productsService:ProductsService,
    public ultilService:UltilService,
    public cartService:CartService
  	) {}

  ngOnInit() {
    setTimeout(()=>{window.scrollTo(0, 0);},0)
  	this.getProduct();
    this.importJs();
  }
  importJs(){
    $('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.slider-nav'
  	});
  	$('.slider-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: true,
  		centerMode: true,
  		focusOnSelect: true
	  });
	// myExtObject.func1();
  }
  sub(){
    let num=this.quantity.nativeElement.innerText*1;
    this.num=(num>1) ? num-1 : num;
  }
  add(){
    let num=this.quantity.nativeElement.innerText*1;
    this.num=num+1;
  }
  getProduct(){
  	const id=+this.activatedRoute.snapshot.paramMap.get('id');
    let item=this.cartService.getCartItem(id);
    if(item!=null){
      this.num=item.quantity;
      this.productDetail=item.product;
    }else{
  	  this.productsService.getProductDetail(id).subscribe(product=>this.productDetail=product);
    }
  }
}

