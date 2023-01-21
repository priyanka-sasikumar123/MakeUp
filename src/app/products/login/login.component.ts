import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}
  ngOnInit(): void {
   
  }
  loginform=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-z@A-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

email='';
pswd='';

 login(){
  var email = this.loginform.value.email;
    var pswd = this.loginform.value.pswd;
    // var userDetails = this.ds.userDetails;
   if(this.loginform.valid){
    this.api.login(email, pswd)
    .subscribe((result:any)=>{
      localStorage.setItem('currentuser',JSON.stringify(result.currentuser));
      alert(result.message);
      this.router.navigateByUrl('payment')
    },
    result=>{
      alert(result.error.message)
    }
    )
   }  
 }
}
