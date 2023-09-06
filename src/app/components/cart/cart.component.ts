import { Component, Input, OnInit } from '@angular/core';
import { ServiceCallService } from 'src/app/service/service-call.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  @Input() count:any
  cartValue:any
  len:number=0
  classs:any
  checkWindo =false
  public quantity : number =0
  public products :any =[];
  public grandTotalll : number=0
  // public priceob :number = 0

  
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products=res;
    //   this.grandTotal=this.cartService.getTotalPrice();
      
    // })
    this.products=this.cartService.CartItemList

    console.log(this.products.length)
    
   this.len=this.products.length

  
  
  }

 removeItem(item:any){
  this.cartService.removeCartItem(item);
 }

 EmtyCart(){
  this.cartService.removeAllCart()
 }
 addQnt(q:any){
  q.quantity += 1
  // this.priceob = q.price
  q.totalcamount += q.price
  console.log(q.totalcamount);
  
  // this.grandTotalll =  q.totalcamount
  // console.log(this.grandTotalll);
  
 
  
 }
 lessQnt(q:any){
  q.quantity-= 1
  q.totalcamount -= q.price 
 }

 showpay(){
  this.classs="p-5 blur-md bg-gray-400"
  this.checkWindo=true
this.products.map((e: { totalcamount: any; })=>{
 this.grandTotalll = this.grandTotalll+ e.totalcamount
})
   
 }
 hidewindow(){
  this.checkWindo=false
  this.classs=false
 }
}
