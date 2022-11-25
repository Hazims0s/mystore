import { provideImageKitLoader } from '@angular/common';
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

  addItem(product:CartItem):void
  {
    
    let cart = this.updateOrPush(product);
    localStorage.setItem('cart',JSON.stringify(cart)); 
  }

  updateOrPush(product:CartItem):CartItem[]
  {
    let cart = this.getCart();
    if(cart?.length && cart?.find(p => p.product.id ==product.product.id)){
      product.qty= cart.find(c => c.product.id ==product.product.id)?.qty! + product.qty;
      cart = cart.filter(p=>p.product.id !==product.product.id);
    }
    cart.push(product);
    return cart;
  }
  
  totalPrice():number
  {
    let price=0;
    this.getCart().forEach( item => {
      price=price+(item.qty*item.product.price);
    })
    return price;
  }
  clearCart():void
  {
    localStorage.setItem('cart','[]'); 
  }
  deletItem(id : number):void
  {
    localStorage.setItem('cart',JSON.stringify(this.getCart().filter(c=> c.product.id !==id) )); 
  }

}

