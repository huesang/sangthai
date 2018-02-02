import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params,Router  } from '@angular/router';
import { SearchService } from './search.service';
import { product } from "../product";
declare var $:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public searchService:SearchService,private router: Router,private activatedRoute : ActivatedRoute) { }
  key_search='';
  array_search:product[]=[];
  ngOnInit() {
    setTimeout(()=>{window.scrollTo(0, 0);},0)
    $(document).ready(function(){
      $("body").click();
    })
    this.activatedRoute.queryParams.subscribe(params => {
        this.key_search=params['key_search'].replace('-',' ');
        this.array_search=this.searchService.search(this.key_search);
    });
  }
}
