import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ServiceCallService } from 'src/app/service/service-call.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{
  
  


  constructor(private router:Router,route: ActivatedRoute,serviece:ServiceCallService,private cartService:CartService){}
  // show(){
  //   this.router.navigate(['/home']);
  // } 
  ngOnInit(): void {
    
  }
  signUp(data:object):void{
    console.warn(data);
  
  }
  LogIn(data:any):void{
    console.warn(data);
    this.cartService.logData.push(data)
    localStorage.setItem("data",data.Email)

  }
  
}
