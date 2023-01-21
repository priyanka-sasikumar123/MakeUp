import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user=''
  name=''
  add=''
  pin=''
  state=''
  country=''
  contact=''
  constructor(private router:Router,private fb:FormBuilder){
    if(localStorage.getItem('currentuser')){
      this.user=JSON.parse(localStorage.getItem('currentuser')||'');
   }
  }
  ngOnInit(): void {
    if(!localStorage.getItem('currentuser')){
        alert('please login first');
        this.router.navigateByUrl('products/login');
      }

  }
    Order(){
      var name = this.paymentform.value.name;
      var add = this.paymentform.value.add;
      var pin = this.paymentform.value.pin;
      var state = this.paymentform.value.state;
      var coun = this.paymentform.value.coun;
      var contact = this.paymentform.value.contact;
      if(this.paymentform.valid){
         alert('Order placed')
         localStorage.removeItem('currentuser');
         this.router.navigateByUrl('')
      }
      else
      {
        alert('Invalid Form')
      }
    }
 //validation
 paymentform=this.fb.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  add:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pin:['',[Validators.required,Validators.pattern('[0-9]*')]],
  state:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  coun:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  contact:['',[Validators.required,Validators.pattern('[0-9]*')]],
})

}
