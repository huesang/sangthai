import { Injectable } from '@angular/core';
@Injectable()
export class UltilService {

  constructor() { }
  formatNumber(num:number){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
