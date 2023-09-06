import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
    public totalItems :number = 0;
    // this.totalItems = res

    constructor(private Servi : CartService){}
    ngOnInit(): void {
      this.Servi.getProducts().subscribe(res=>{
        this.totalItems =res.length
      })
      this.Servi.getProducts()
    }
}
