import { Injectable } from '@angular/core';
import {Product} from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  products: Product[] = [new Product().fill(1, 'Classique', '/assets/2.jpg', 60,
    // @ts-ignore
    true, new Date(2019, 5, 12), [{type: 40, qte: 3}, {type: 41, qte: 3},{type: 41, qte: 3}]),
    new Product().fill(2, 'Basket', '/assets/1.jpg', 25,
      // @ts-ignore
      true, new Date(2019, 5, 12), [{type: 40, qte: 4}, {type: 41, qte: 10}]),
    new Product().fill(3, 'Jute', '/assets/3.jpg', 25,
      // @ts-ignore
      true, new Date(2019, 5, 12), [{type: 37, qte: 4}, {type: 38, qte: 10}]),
      new Product().fill(4, 'Basket Femme', '/assets/4.jpg', 30,
      // @ts-ignore
      true, new Date(2019, 5, 12), [{type: 37, qte: 4}, {type: 38, qte: 10}])];
  constructor() {

  }
  getProducts(): Product[]{
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter(p => p.id === id)[0];
  }

checkProduct(id: number) {
    for(var i=0;i<this.products.length;i++){
      if(id == this.products[i].id){
        return true;
      }
      return false;
    }
  }
  add(product: Product) {
    if(this.checkProduct(product.id)==false)
    {this.products.push(product);}
    else {console.log("id non valide");}
  }
  modify(id, product) {
    for (let i = 0 ; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
    delete(id) {
      for (let i = 0 ; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          this.products.splice(i, 1);
        }
      }
    }
}
