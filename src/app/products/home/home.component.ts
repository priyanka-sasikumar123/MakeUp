import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}
  ngOnInit(): void {
   
  }

 registerform=this.fb.group({
  fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

fname = '';
lname='';
email='';
pswd ='';

register(){
  var fname = this.registerform.value.fname;
  var lname = this.registerform.value.lname;
  var email = this.registerform.value.email;
  var pswd = this.registerform.value.pswd;
  if(this.registerform.valid){
    
   this.api.register(fname,lname,email,pswd)
   .subscribe((result:any)=>{
     alert(result.message)
     this.router.navigateByUrl('')
   },
   (result:any)=>{
    alert(result.error.message)
   }) //if validation is true 
                            //then the data in dataservice-(ds) will be assigned to result variable.
    
  }
  else
  {
     alert('Invalid form')
  }
}
}
