import { Component, OnInit,animate,state,transition,trigger,style,keyframes } from '@angular/core';
import { product } from '../product'
import {ProductsService} from '../products.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('slider',[
        state('normal',style({
            transform:'scale(1) translate(0px, 0px) ',
            opacity:1,
        })),
        state('scale',style({
            transform:'scale(0) translate(0px, -300px)',
            opacity:1,
        })),
        state('fade',style({
          transform:'scale(1) translate(0px, 0px) ',
          opacity:0,
        })),
        state('translateY',style({
            transform:'scale(1) translate(0px, 100%)',
            opacity:1,
        })),
        state('translateX',style({
          transform:'scale(1) translate(100vw,0px)',
          opacity:1,
        })),
        transition('normal => scale',animate('0.5s linear')),
        transition('normal => translateY',animate('0.5s linear')),
        transition('normal => translateX',animate('0.5s linear')),
        transition('normal => fade',animate('0.5s linear')),

    ])
  ]
})
export class HomeComponent implements OnInit {
  product_list:product[];
  constructor(private ProductsService:ProductsService) { }
  slider_data=[
    {
      img:'https://porchco.com/wp-content/uploads/2014/02/bed-swing-banner-1200x400.jpg',
      state:'normal',
    },
    {
      img:'http://www.pwbeck.com.au/blog/wp-content/uploads/2014/08/RP-Banner-1200-x-400px.jpg',
      state:'normal',
    },
    {
      img:'http://www.popeselectrical.com.au/wp-content/uploads/2015/07/AUG_DEAL_FULL-WIDTH-BANNER-1200x400.jpg',
      state:'normal',
    },
    {
      img:'http://rotherwood-recruitment.com/wp-content/uploads/sm-banner-1200x400.jpg',
      state:'normal',
    }
  ]
  ngOnInit() {
    this.initAnimation();
    this.getProductList();
    let self=this;
    setTimeout(function(){
      self.slider();
    },0)
  }
  getProductList():void{
    this.ProductsService.getProductList().subscribe(list=>this.product_list=list.slice(0,4));
  }
  initAnimation(){
    // chay hieu ung cho comment
    $('#cmt-items').slick({
        infinite: true,
        dots: true,
        arrows:false,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1
      }); 
    // chay hieu ung truot len khi xuat hien
    $(".animated").callanimation();
    // show picker chon ngay thang
    $(document).ready(function(){
      setTimeout(()=>{window.scrollTo(0, 0);},0)
      $(".form_datetime").datetimepicker(); 
    });
  }
  slider(){
    var self=this;
    var time_animate=500;
    $(document).ready(function(){
      
      var length=$(".item-img").length-1; 
      //Tao wrap cho slider,set height cho no
      $("#slider").wrapInner( "<div class='wrap-slider'></div>");
      var wrap_slider_height=$(".item-img").outerHeight();  
      $(".wrap-slider").css('height',wrap_slider_height+'px');
      //Tao navigation
      $("#slider").append("<ul class='navigation'></ul>")
      for(let li=0;li<=length;li++){
        $("#slider .navigation").append("<li></li");
      }
      //Tao nut pre,next
      $("#slider").append("<div class='button'><span id='pre'><</span><span id='next'>></span></div>")
      //Code cho phan run slider
      var active=0; 
      $("#slider .item-img:eq("+active+")").css('z-index',1);
      $("#slider li:eq("+active+")").addClass("active");
      var run=setTime();
      function setTime(){ 
          return setInterval(function(){
             setActive(active,checkAsc(active));
          },4000)   
      }
      $("#pre").click(()=>{
        clearInterval(run); 
        setActive(active,checkDsc(active));
        setTimeout(()=>{
          run=setTime()
        },time_animate);
      })
      $("#next").click(()=>{
        clearInterval(run); 
        setActive(active,checkAsc(active));
        setTimeout(()=>{
          run=setTime()
        },time_animate);
      })
      $("li").click(function(){
        var item=$(this).index();
        clearInterval(run); 
        setActive(active,item);
        setTimeout(()=>{
          run=setTime()
        },time_animate);
      });
      function setActive(x,func){
         $("#slider .item-img:eq("+x+")").css('z-index',1);
         $("#slider .item-img:eq("+x+")").siblings().css('z-index',-1);
         $("#slider .item-img:eq("+func+")").css('z-index',0);
         var animate=['scale','translateY','translateX','fade'];
         self.slider_data[x].state=animate[x];
         //$("#slider .item-img:eq("+x+")").addClass("scale-rotate");
         active=func;
         $("#slider li:eq("+active+")").siblings().removeClass("active");
         $("#slider li:eq("+active+")").addClass("active");
         setTimeout(()=>{
          $("#slider .item-img:eq("+x+")").css('z-index',-1);
          self.slider_data[x].state='normal';
         },2000)       
      }
      function checkAsc(index){
        return (index<length)? index+1 : 0;
      }
      function checkDsc(index){
        return (index>0)? index-1 : length;
      }
    }) 
    
  }
}
