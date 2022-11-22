import { Injectable } from '@angular/core';
import { CartItem } from './cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
   getCart():CartItem[]{
    return JSON.parse( localStorage.getItem('cart') || '[]');
  }

  addItem(product:CartItem)
  {
    let cart = this.getCart();
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart)); 
  }
    
  

}

