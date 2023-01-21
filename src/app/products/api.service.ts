import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //httpclient module connected to api services
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  searchkey = new BehaviorSubject('')
  //to share stream of data. 
 
  constructor(private http:HttpClient) { }
 
  getproducts(){
    return this.http.get('http://localhost:3000/all-products')
  }

  //add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      name:product.name,
      price:product.price,
      image_link:product.image_link,
      product_type:product.product_type
      
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
  }

  //to getwishlist from collection
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }
  
  //delete item from wishlist

  deletefromwish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }

  //add to wishlist
  addtocart(product:any){
    const body={
      id:product.id,
      name:product.name,
      price:product.price,
      image_link:product.image_link,
      product_type:product.product_type
      
    }
    return this.http.post('http://localhost:3000/addtocart',body)
  }


//to getcart from collection
getcart(){
  return this.http.get('http://localhost:3000/getcart')
}

 //delete item from cart

 deletefromcart(id:any){
  return this.http.delete('http://localhost:3000/deletecart/'+id)
}

register(firstname:any,lastname:any,email:any,password:any){
 
    const data={
      
      firstname,
      lastname,
      email,
      password
    }
    return this.http.post('http://localhost:3000/register',data)
}

//login

 login(email:any,pswd:any){

  const data={
    email,
    pswd
  }
  return this.http.post('http://localhost:3000/login',data)
 }

 
}
