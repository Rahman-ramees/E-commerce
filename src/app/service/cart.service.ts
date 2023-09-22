import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  public CartItemList: any = []
  public ProductList = new BehaviorSubject<any>([]);
  public logData: any = []
  public grandtotalTest: number = 0
  // public name: String = ""

  ngOnInit(): void {
    console.log(this.logData);
    // console.log(this.grandtotalTest+"grand");
    
    
  }
  

  getProducts() {
    return this.ProductList.asObservable();
  }

  setProduct(product: any) {
    this.CartItemList.push(...product)
    this.ProductList.next(product)
  }

  addToCart(product: any) {
    product.quantity=1
    product.totalcamount=product.price
    // this.name = product.title
    // console.log(product.title);
    // console.log(this.CartItemList.includes(product));

    if (!this.CartItemList.includes(product)) {
      this.CartItemList.push(product)
    }
    else {
      console.log("Already added this item");
    }

    this.ProductList.next(this.CartItemList)
    this.getTotalPrice(this.CartItemList.totalcamount);
    // console.log(product.totalcamount+"grand");
    this.grandtotalTest += product.totalcamount
    console.log(this.grandtotalTest+"grandtest");
    
    
  }

  getTotalPrice(grand:any): number {
    let grandTotal = 0
    
    this.CartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal
  }

  removeCartItem(product: any) {
    this.CartItemList.map((a: any, index: any) => {
      if (product._id === a._id) {
        this.CartItemList.splice(index,1);
        // console.log(product.id);
      }
    });
    
  }

  removeAllCart() {
    this.CartItemList = []
    this.ProductList.next(this.CartItemList);
  }

}
