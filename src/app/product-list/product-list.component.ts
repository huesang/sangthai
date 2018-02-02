import { Component, OnInit } from '@angular/core';
import { product } from '../product'
import {ProductsService} from '../products.service';
declare var $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productOnPage=4;
  typeSort:string='Mặc định';
  numberPage:number;
  pageActived:number;
  allProduct:product[];
  product_list:product[];
  constructor(private ProductsService:ProductsService) { }

  ngOnInit() {
    this.ProductsService.getProductList().subscribe(list=>this.allProduct=list);
    this.initAnimation();
    this.getNumberPage();
  	this.getProductPage(1);
  }
  getNumberPage():number[]{
    this.numberPage=Math.ceil(this.allProduct.length/this.productOnPage);
    let fakeArray = new Array(this.numberPage);
    return fakeArray;
  }
  getProductPage(page:number){ 
    if(page<=this.numberPage && page>0){        
      let from=(page-1)*this.productOnPage;
      let to=page*this.productOnPage;
      this.product_list=this.allProduct.slice(from,to);
      this.pageActived=page;
    }
  }
  sort(name:string,filter:string,sort:string):void{
    let array=this.allProduct;
    let length=this.allProduct.length;
    for(let i=0;i<length-1;i++){
      for(let j=i+1;j<length;j++){
        if(array[j][filter]<array[i][filter]){
          let x=array[i];
          array[i]=array[j];
          array[j]=x;
        }
      }
    }
    if(sort=='dsc'){
      array.reverse();
    };
    this.product_list=array;
    this.getProductPage(1);
    this.typeSort=name;
  }
  initAnimation(){
    setTimeout(()=>{window.scrollTo(0, 0);},0)
    $(".dropdown").click(function(event) {
      $(this).toggleClass('is-active');
    });
  }
}
