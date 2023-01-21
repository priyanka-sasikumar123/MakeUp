import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproducts:any=[]; //whole products details came to this array.
  searchterm:string='';
  constructor(private api:ApiService) { 
  }
  ngOnInit(): void {
   this.api.getproducts().subscribe(
    (data:any)=>{
      this.allproducts=data.products
    }
   )
   
   this.api.searchkey.subscribe(
    (data:any)=>{
      this.searchterm=data
    }
  )

  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        alert(result.message) //added successfully
      },
      (result:any)=>{
        alert(result.error.message)//error
      }

    )
  }

  //add to cart

  addtocart(product:any){
    this.api.addtocart(product).subscribe(
      (result:any)=>{
        alert(result.message) //added successfully
      },
      (result:any)=>{
        alert(result.error.message)//error
      }

    )
  }
}
