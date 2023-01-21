import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any
  emsg:any
  cartcount:number=0;
  user='';
  grand:number=0;
  constructor(private api:ApiService,private router:Router) { 
    
  }
  ngOnInit(): void {
    this.api.getcart().subscribe(
      (data:any)=>{
        this.cart=data.products
        this.cartcount=this.cart.length
        this.grand=this.gettotal();
        if(this.cart.length==0){
          this.emsg='Empty wishlist'
        }
     
      },
      (data:any)=>{
        this.emsg=data.error.message
      },
  
     )
  }
  //total price
  gettotal(){
  var grandsum=0;
  this.cart.map((item:any)=>{
    grandsum+=item.price
  })
  return grandsum;
  }
  deletecart(product:any){
    this.api.deletefromcart(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('cart')
        this.cart=result.cart
        if(this.cart.length==0){
          this.emsg="Empty cart"
        }
      },
      (result:any)=>{
        alert(result.error.message)
      },
    )
  } 

  //payment
  Payment(){
    // if(!localStorage.getItem('currentuser')){
    //   alert('please login first');
    //   this.router.navigateByUrl('');
    // }
    
      this.router.navigateByUrl('products/payment')
    
  }
}
