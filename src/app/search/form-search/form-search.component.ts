import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from "../search.service";
import { ServiceInstanceService } from "../../service-instance.service";
import { Router} from '@angular/router';
import { product } from '../../product';
declare var $:any;
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Input() page:string;
  //Page để hiển thị button khi đang ở trang search
  select=-1;
  key_search='';
  array_search:product[]=[];
  constructor(public searchService:SearchService,private router:Router,private serviceInstance:ServiceInstanceService) { }

  ngOnInit() {
    var self=this;    
    $(document).ready(function(){
      $("body").click(function(){
        $(".formSearch >ul").css('display','none');
      });
      $(".formSearch").click(function(event) {
        event.stopPropagation();
      });
      $(".formSearch input").focus(function(event) {
        $(".formSearch >ul").css('display','block');
      })
    })
  }
  search(input){
    this.array_search=this.searchService.search(input.target.value);   
  }
  submit(form){
    if(this.select>=0){
      let url=$(".formSearch ul li:eq("+this.select+")").find("a").attr('href');
      this.router.navigate([url]);
    }else{
      //Đóng modal search ở menu
      $("#mySearch").click();
      let key_search=this.key_search.replace(' ','-');
      this.router.navigate(['/search'], { queryParams: { key_search: key_search } });
    }
  }
  down(){
    this.select+= (this.select < 10)? 1 : 0;
  }
  up(){
    this.select-= (this.select > 0)? 1 : 0;
  }
}
