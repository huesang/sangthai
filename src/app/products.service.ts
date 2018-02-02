import { Injectable } from '@angular/core';
import {product} from './product';
import {data_product} from './data_product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService { 

  constructor() { }
  getProductList(): Observable<product[]> {
  	return of(data_product);
  }
  getProductDetail(id:number):Observable<product>{
  	return of(data_product.find(val=>val.id==id));
  }
}
