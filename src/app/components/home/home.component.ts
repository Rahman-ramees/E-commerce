import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceCallService } from 'src/app/service/service-call.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    lazyLoad:true,
    autoplay:true,
    // fluidSpeed:true,
    smartSpeed:900,
    autoplayTimeout:3000,
    navSpeed: 900,
    navText: ['< Prev', 'Next >'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true

  }

  constructor(private servi:ServiceCallService,private cartService : CartService){}

  // public productList : any;
  public ourproduct : any;
  public logindata:any

  ngOnInit():void{
    // this.servi.getProducts().subscribe((res)=>{
    //   this.productList=res;
    //   this.productList.forEach((a:any)=> {
    //     Object.assign(a,{quantity:1,total:a.price})
    //   });
    // }) 

    // this.cartService.logData.subscribe((res:any)=>{
    //   this.logindata=res
    //   console.log(this.logindata);
      
    // })
    
    // console.log(this.cartService.logData);
    

    this.servi.getOurApi().subscribe((res)=>{
      this.ourproduct=res
      this.ourproduct.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
  addToCart(item :any){
      this.cartService.addToCart(item)
      // this.cartService.grandtotalTest.push(item.totalcamount)
      alert("Product Added")
      
  }
  // showFiller=true

}

