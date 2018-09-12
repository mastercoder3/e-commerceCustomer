import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs: AngularFirestore) { }

  // :::::::::::::::::::::::::::::::::::::::CLIENT::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 //Client
 createClient(uid, data){
  return this.afs.doc('clients/'+uid).set(data);
 }

 //READ 
 getClient(uid){
  return this.afs.doc('clients/'+uid).snapshotChanges();
}

//UPDATE 
updateClient(uid, data){
  return this.afs.doc('clients/'+uid).update(data);

}

deleteClient(uid){
  return this.afs.doc('clients/'+uid).delete();
}

// :::::::::::::::::::::::::::::::::::Product:::::::::::::::::::::::::::::::::::::::::

addProduct(data){
  return this.afs.collection('product').add(data);
}

getProduct(){
  return this.afs.collection('product');
}

getProductById(id){
  return this.afs.doc('product/'+id).snapshotChanges();
}

updateProduct(id, data){
  return this.afs.doc('product/'+id).update(data);
}

deleteProduct(id){
  return this.afs.doc('product/'+id).delete();
}



}
