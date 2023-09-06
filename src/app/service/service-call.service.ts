import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://fakestoreapi.com/products/')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOurApi(){
    return this.http.get<any>('http://localhost:3000/API')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}


