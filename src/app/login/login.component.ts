import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {ApiService} from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';
  err='';

  constructor(private afAuth: AuthService, private afs: ApiService, private router: Router) { }

  ngOnInit() {
  } 

  client(){
    this.router.navigate(['/login']);
  }

  login(){
    localStorage.removeItem('cid');
    this.afAuth.login(this.email,this.password)
      .then(res => {
        this.afs.getClient(res.user.uid).subscribe(data => {
          if(data){
            
            localStorage.setItem('cid', res.user.uid);
            this.router.navigate(['/dashboard']);
          }
          else
            console.log('User Data Not Found');
        })
      }, err=>{
          this.err = err;
          console.log(err);
      })
  }
}
