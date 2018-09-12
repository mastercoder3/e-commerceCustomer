import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './../api.service';

export interface Product{
  name: string,
  quantity: number,
  price: number
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Observable<Product[]>;
  err;
  dref: AngularFirestoreDocument;
  products: AngularFirestoreCollection<Product>;
  data={
    name: '',
    quantity: Number,
    price: Number,
    id: ''
  };

  constructor(private api: ApiService, private router: Router, private afs: AngularFirestore) { 
    this.products = this.afs.collection<Product>('product');
    this.product = this.products.valueChanges();
  }

  ngOnInit() {
  }

  add(){
    this.data.id = localStorage.getItem('cid');
    this.api.addProduct(this.data)
      .then(res=>{
          console.log('Product Updated');
      }, err=>{
          console.log('Error!!!!');
      })
  }

 

}
