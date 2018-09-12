import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-csignup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  email: string;
  password: string;
  err;

  signup(){
    console.log(this.email);
    this.auth.signup(this.email,this.password)
      .then(res=>{
        console.log(res);
        this.api.createClient(res.user.uid, {email: this.email, password: this.password})
          .then(data=>{
            if(data){
              localStorage.setItem('cid', res.user.uid);
              this.router.navigate(['/dashboard']);
            }
            else{
              this.err = "Error: No User data found";
            }
            
          })
      }, err=>{
        this.err = err;
        console.log(this.err);
      })
  }

}
