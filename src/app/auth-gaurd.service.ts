import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean{
    if(localStorage.getItem('cid') != null){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
