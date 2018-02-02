import { Component, OnInit, Input } from '@angular/core';
import { UltilService } from '../ultil.service';
import { CartService } from '../cart.service'
import {product} from '../product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product_list:product[];
  constructor(public ultilService:UltilService,public cartService:CartService) { }
  ngOnInit() {
  }
}
 