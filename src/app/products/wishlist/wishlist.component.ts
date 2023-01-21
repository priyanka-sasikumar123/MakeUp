import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist:any
  emsg:any
  
  constructor(private api:ApiService,private router:Router) { 
  }
  ngOnInit(): void {
   this.api.getwishlist().subscribe(
    (data:any)=>{
      this.wishlist=data.products
      if(this.wishlist.length==0){
        this.emsg='Empty wishlist'
      }
    },
    (data:any)=>{
      this.emsg=data.error.message
    },

   )
  }
deletewish(product:any){
  this.api.deletefromwish(product.id).subscribe(
    (result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('wishlist')
      this.wishlist=result.wishlist
      if(this.wishlist.length==0){
        this.emsg="Empty wishlist"
      }
    },
    (result:any)=>{
      alert(result.error.message)
    },
  )
}
addcart(product:any){
  this.api.addtocart(product).subscribe(
    (data:any)=>{
        return{
          product:data
        }
    }
  )
  this.deletewish(product)
}

}
