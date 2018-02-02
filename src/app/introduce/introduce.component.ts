import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{window.scrollTo(0, 0);},0)
  }

}
